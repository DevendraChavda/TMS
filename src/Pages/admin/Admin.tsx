// import { SideBar } from "./sidebar/page"
// import SideBar from './sidebar/page'
import {SideBar} from './sidebar/components/mail'
// import ModeToggle from '@/registry/default/example/mode-toggle';
export default function MailPage() {
  return (
    <>
      <div className="md:hidden ">
        <img
          src="/examples/mail-dark.png"
          width={1280}
          height={727}
          alt="Mail"
          className="hidden dark:block"
        />
        <img
          src="/examples/mail-light.png"
          width={1280}
          height={727}
          alt="Mail"
          className="block dark:hidden"
        />
      </div>
      <div className="hidden flex-col md:flex h-screen">
        
        <SideBar
          // accounts={accounts}
          // mails={mails}
          defaultLayout={undefined}
          defaultCollapsed={undefined}
          navCollapsedSize={4} accounts={[]} mails={[]}        />
      </div>
    </>
  )
}
