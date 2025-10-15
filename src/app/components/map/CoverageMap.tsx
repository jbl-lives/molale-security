"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Circle, CircleMarker, Popup } from "react-leaflet";
import type { CoverageArea } from "@/data/coverage";
import { coverageAreas, COVERAGE_CENTER } from "@/data/coverage";



export default function CoverageMap() {
  const primaryRadiusMeters = 25000;
  const extendedRadiusMeters = 40000;

  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgb(0_0_0_/_0.06)]">
      <MapContainer
        center={[COVERAGE_CENTER.lat, COVERAGE_CENTER.lng]}
        zoom={11}
        scrollWheelZoom={false}
        className="h-[420px] w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Circle
          center={[COVERAGE_CENTER.lat, COVERAGE_CENTER.lng]}
          radius={primaryRadiusMeters}
          pathOptions={{
            color: "rgba(231,105,45,0.9)",
            fillColor: "rgba(231,105,45,0.15)",
            weight: 2,
          }}
        />
        <Circle
          center={[COVERAGE_CENTER.lat, COVERAGE_CENTER.lng]}
          radius={extendedRadiusMeters}
          pathOptions={{
            color: "rgba(54,69,79,0.5)",
            dashArray: "6 6",
            weight: 1.25,
          }}
        />

        {coverageAreas.map((a) => (
          <CircleMarker
            key={a.name}
            center={[a.lat, a.lng]}
            radius={8}
            pathOptions={{ color: "rgba(231,105,45,1)", fillColor: "rgba(231,105,45,0.9)", fillOpacity: 0.9 }}
          >
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{a.name}</div>
                <div className="text-gray-600">Response: {a.response}</div>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Legend stays the same */}
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-white/90 p-2 text-xs shadow">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full" style={{ background: "rgba(231,105,45,0.9)" }} />
          <span>Primary locations</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full" style={{ border: "2px solid rgba(231,105,45,0.9)" }} />
          <span>~{primaryRadiusMeters/1000} km primary radius</span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full" style={{ border: "2px dashed rgba(54,69,79,0.6)" }} />
          <span>~{extendedRadiusMeters/1000} km on-demand</span>
        </div>
      </div>
    </div>
  );
}

