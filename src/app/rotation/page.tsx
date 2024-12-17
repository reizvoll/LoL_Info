"use client";

import PageComponents from "../../components/ui/rotation/PageComponents";
import AppProvider from "./Provider";

export default function RotationPage() {
  return (
    <AppProvider>
      <PageComponents />
    </AppProvider>
  );
}
