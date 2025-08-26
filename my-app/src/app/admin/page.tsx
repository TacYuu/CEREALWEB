import TopBar from "@/app/components/admin/TopBar";
import Sidebar from "@/app/components/admin/Sidebar";
import StatsCard from "@/app/components/admin/StatsCard";
import PointsManagement from "@/app/components/admin/PointsManagement";
import ShopManagement from "@/app/components/admin/ShopManagement";

export default function AdminPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <TopBar />

        {/* Stats Section */}
        <div className="p-6 flex gap-5">
          <StatsCard icon="/Icons/users.png" title="Total Users" value="1234" />
          <StatsCard icon="/Icons/coins.png" title="Total Points" value="5678" />
          <StatsCard icon="/Icons/market.png" title="Shop Items" value="42" />
          <StatsCard icon="/Icons/growth.png" title="Growth Rate" value="12%" />
        </div>

        {/* Management Section */}
        <div className="p-6 flex gap-6">
          <PointsManagement />
          <ShopManagement />
        </div>
      </div>
    </div>
  );
}
