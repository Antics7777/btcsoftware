import Sidebar2 from "@/components/shared/Sidebar2"
import Sidebar3 from "@/components/shared/Sidebar3"

export default function Home() {
  return (
    <main className="">
      <h1 className="head-text text-left"> Bitcoin Software </h1>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 md:flex-row md:gap-20 mt-5">
    <Sidebar2/>
    <Sidebar3/>
      </div>
    </main>
  )
}
