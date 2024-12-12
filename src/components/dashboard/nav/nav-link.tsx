"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "~/components/ui/button";
import { setDashboardView } from "~/state/dashboard-view/dashboard-view-slice";
import { AppDispatch, RootState } from "~/state/store";

type NavLinkProps = {
  value: "profile" | "links";
  children: React.ReactNode;
};

export function NavLink({ children, value }: NavLinkProps) {
  const dashboardView = useSelector(
    (state: RootState) => state.dasboardView.view,
  );
  const dispatch = useDispatch<AppDispatch>();

  const setView = () => {
    dispatch(setDashboardView(value));
  };

  return (
    <Button
      onClick={setView}
      variant={dashboardView === value ? "secondary" : "ghost"}
    >
      {children}
    </Button>
  );
}
