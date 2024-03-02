"use client"
import * as React from "react"
import {
  File,
  Inbox,
  Send,

} from "lucide-react"
import { Nav } from "./nav"
import { Mail } from "../data"
import { useMail } from "../use-mail"
import { cn } from "@/lib/utils"
import { Separator } from "@/registry/new-york/ui/separator"
import { TooltipProvider } from "@/registry/new-york/ui/tooltip"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/registry/new-york/ui/resizable"

interface MailProps {
  accounts: {
    label: string
    email: string
    icon: React.ReactNode
    route: string
  }[]
  mails: Mail[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}
// import task from '../../tasks'
import { NavLink, Outlet } from "react-router-dom"
import { ModeToggle } from "@/components/ui/mode-toggle"
export function SideBar({
  // accounts,
  // mails,
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [mail] = useMail()

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`
        }}
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          className={cn(isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out")}
        >
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Dashboard",
                icon: Send,
                variant: "ghost",
                route: "/admin/adminticket"
              },
              {
                title: "Setting",
                icon: Send,
                variant: "ghost",
                route: "/admin/setting"
              },
              {
                title: "Client",
                icon: Inbox,
                variant: "default",
                route: "/admin/allclient"
              },
              {
                title: "Service Provider",
                icon: File,
                variant: "ghost",
                route: "/admin/allservicepro"
              },
              
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          {/* <MailDisplay /> */}
          <ModeToggle/>
          <div className="flex h-full flex-col">
            <Outlet /> {/* Render the children here */}
            <Separator />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  )
}
