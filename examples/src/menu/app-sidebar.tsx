import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "xplorer-ui";
import { Logo } from "./logo";
import { Link, useLocation } from "react-router-dom";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "/",
      items: [
        {
          title: "Installation",
          url: "/",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          url: "/components/buttons",
        },
        {
          title: "Toast",
          url: "/components/taosts",
        },
        {
          title: "Loader",
          url: "/components/loaders",
        },
        {
          title: "Modal",
          url: "/components/modals",
        },
        {
          title: "Data Table",
          url: "/components/data-tables",
        },
        {
          title: "Form",
          url: "/components/forms",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname == item.url}>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
