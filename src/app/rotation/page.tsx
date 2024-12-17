"use client";

import PageComponents from "../../ui/rotation/PageComponents";
import AppProvider from "./Provider";

export default function RotationPage() {
  return (
    <AppProvider>
      <PageComponents />
    </AppProvider>
  );
}
