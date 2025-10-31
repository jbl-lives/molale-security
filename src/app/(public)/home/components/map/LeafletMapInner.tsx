// src/app/components/map/LeafletMapInner.tsx
"use client";

import "leaflet/dist/leaflet.css";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Popup,
} from "react-leaflet";
import type { CoverageArea } from "@/data/coverage";
import { coverageAreas, COVERAGE_CENTER } from "@/data/coverage";

export default function LeafletMapInner() {
  const [ready, setReady] = useState(false);

  const primaryRadiusMeters = 25_000;
  const extendedRadiusMeters = 40_000;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]">
      <MapContainer
        center={[COVERAGE_CENTER.lat, COVERAGE_CENTER.lng]}
        zoom={11}
        scrollWheelZoom={false}
        className="h-[420px] w-full"
        whenReady={() => setReady(true)}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> • &copy; OpenStreetMap'
        />

        {/* Render rings & markers only when the map is ready */}
        {ready && (
          <>
            {/* Primary 25 km radius */}
            <Circle
              center={[COVERAGE_CENTER.lat, COVERAGE_CENTER.lng]}
              radius={primaryRadiusMeters}
              pathOptions={{
                color: "rgba(231,105,45,0.9)",
                fillColor: "rgba(231,105,45,0.15)",
                weight: 2,
              }}
            />

            {/* Extended ~40 km on-demand radius */}
            <Circle
              center={[COVERAGE_CENTER.lat, COVERAGE_CENTER.lng]}
              radius={extendedRadiusMeters}
              pathOptions={{
                color: "rgba(54,69,79,0.55)",
                dashArray: "6 6",
                weight: 1.25,
                fillOpacity: 0,
              }}
            />

            {/* Red “hot spot” markers */}
            {coverageAreas.map((a: CoverageArea) => (
              <CircleMarker
                key={a.name}
                center={[a.lat, a.lng]}
                radius={8}
                pathOptions={{
                  color: "rgba(231,105,45,1)",
                  fillColor: "rgba(231,105,45,0.92)",
                  fillOpacity: 0.92,
                }}
              >
                <Popup>
                  <div className="text-sm">
                    <div className="font-semibold">{a.name}</div>
                    {/* Show optional fields only if present to avoid TS errors */}
                    {(a as any).response && (
                      <div className="text-xs text-gray-600">
                        Response: {(a as any).response}
                      </div>
                    )}
                    {(a as any).eta && (
                      <div className="text-xs text-gray-600">
                        ETA: {(a as any).eta}
                      </div>
                    )}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </>
        )}
      </MapContainer>

      {/* Legend */}
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-white/92 backdrop-blur px-3 py-2 text-xs shadow ring-1 ring-black/5">
        <div className="flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ background: "rgba(231,105,45,0.92)" }}
          />
          <span>Primary locations</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ border: "2px solid rgba(231,105,45,0.9)" }}
          />
          <span>~{primaryRadiusMeters / 1000} km primary radius</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ border: "2px dashed rgba(54,69,79,0.6)" }}
          />
          <span>~{extendedRadiusMeters / 1000} km on-demand</span>
        </div>
      </div>
    </div>
  );
}
