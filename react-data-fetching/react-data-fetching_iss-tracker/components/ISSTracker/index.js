import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error(
      "Ein Fehler ist beim Abrufen der ISS-Daten aufgetreten."
    );
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return await response.json();
};

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (error) {
    return <div>Fehler: {error.message}</div>;
  }

  if (isLoading || !data) {
    return <div>Lade ISS-Daten...</div>;
  }

  const { longitude, latitude } = data;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
