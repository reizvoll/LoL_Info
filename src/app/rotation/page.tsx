"use client";

import PageComponents from "../../components/champ_rotation/PageComponents";
import AppProvider from "./Provider";

export default function RotationPage() {
  return (
    <AppProvider>
      <PageComponents />
    </AppProvider>
  );
}