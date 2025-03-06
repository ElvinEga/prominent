import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
  ChartGrid,
  ChartXAxis,
  ChartYAxis,
  ChartArea,
  ChartLine,
  ChartBar,
} from "@/components/ui/chart";

export default function DashboardPage() {
  return (
    <div className="container w-full mx-auto py-8">
      <div className="flex flex-col justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Products
                    </CardTitle>
                    <Package className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last week
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Orders
                    </CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2,350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Customers
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Product Sales Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Chart>
                      <ChartLegend className="justify-center gap-6">
                        <ChartLegendItem name="Sales" color="#0ea5e9" />
                        <ChartLegendItem name="Revenue" color="#8b5cf6" />
                      </ChartLegend>
                      <ChartContainer>
                        <ChartTooltip>
                          <ChartTooltipContent />
                        </ChartTooltip>
                        <ChartGrid
                          x={{ strokeDasharray: "5 5" }}
                          y={{ strokeDasharray: "5 5" }}
                        />
                        <ChartXAxis
                          tickCount={7}
                          tickFormat={(value) => `${value}`}
                        />
                        <ChartYAxis />
                        <ChartLine
                          data={[
                            { x: "Jan", y: 100 },
                            { x: "Feb", y: 120 },
                            { x: "Mar", y: 170 },
                            { x: "Apr", y: 140 },
                            { x: "May", y: 200 },
                            { x: "Jun", y: 230 },
                            { x: "Jul", y: 210 },
                          ]}
                          name="Sales"
                          stroke="#0ea5e9"
                          strokeWidth={2}
                        />
                        <ChartLine
                          data={[
                            { x: "Jan", y: 300 },
                            { x: "Feb", y: 320 },
                            { x: "Mar", y: 370 },
                            { x: "Apr", y: 290 },
                            { x: "May", y: 400 },
                            { x: "Jun", y: 380 },
                            { x: "Jul", y: 410 },
                          ]}
                          name="Revenue"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                        />
                      </ChartContainer>
                    </Chart>
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Top Categories</CardTitle>
                    <CardDescription>
                      Top selling product categories this month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart>
                      <ChartContainer>
                        <ChartTooltip>
                          <ChartTooltipContent />
                        </ChartTooltip>
                        <ChartGrid x={{ strokeDasharray: "5 5" }} />
                        <ChartXAxis />
                        <ChartYAxis />
                        <ChartBar
                          data={[
                            { x: "Electronics", y: 500 },
                            { x: "Clothing", y: 350 },
                            { x: "Home", y: 280 },
                            { x: "Beauty", y: 220 },
                            { x: "Sports", y: 150 },
                          ]}
                          name="Sales"
                          fill="#0ea5e9"
                        />
                      </ChartContainer>
                    </Chart>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Product Performance</CardTitle>
                    <CardDescription>
                      Monthly product performance metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart>
                      <ChartContainer>
                        <ChartTooltip>
                          <ChartTooltipContent />
                        </ChartTooltip>
                        <ChartGrid
                          x={{ strokeDasharray: "5 5" }}
                          y={{ strokeDasharray: "5 5" }}
                        />
                        <ChartXAxis />
                        <ChartYAxis />
                        <ChartArea
                          data={[
                            { x: "Jan", y: 500 },
                            { x: "Feb", y: 600 },
                            { x: "Mar", y: 550 },
                            { x: "Apr", y: 700 },
                            { x: "May", y: 900 },
                            { x: "Jun", y: 850 },
                          ]}
                          name="Views"
                          fill="url(#gradient)"
                          stroke="#0ea5e9"
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#0ea5e9"
                              stopOpacity={0.5}
                            />
                            <stop
                              offset="100%"
                              stopColor="#0ea5e9"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </ChartContainer>
                    </Chart>
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Inventory Status</CardTitle>
                    <CardDescription>
                      Current inventory levels by category
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart>
                      <ChartLegend className="justify-center gap-6">
                        <ChartLegendItem name="In Stock" color="#10b981" />
                        <ChartLegendItem name="Low Stock" color="#f59e0b" />
                        <ChartLegendItem name="Out of Stock" color="#ef4444" />
                      </ChartLegend>
                      <ChartContainer>
                        <ChartTooltip>
                          <ChartTooltipContent />
                        </ChartTooltip>
                        <ChartGrid x={{ strokeDasharray: "5 5" }} />
                        <ChartXAxis />
                        <ChartYAxis />
                        <ChartBar
                          data={[
                            { x: "Electronics", y: 80 },
                            { x: "Clothing", y: 65 },
                            { x: "Home", y: 75 },
                            { x: "Beauty", y: 90 },
                            { x: "Sports", y: 50 },
                          ]}
                          name="In Stock"
                          fill="#10b981"
                        />
                        <ChartBar
                          data={[
                            { x: "Electronics", y: 15 },
                            { x: "Clothing", y: 25 },
                            { x: "Home", y: 20 },
                            { x: "Beauty", y: 8 },
                            { x: "Sports", y: 30 },
                          ]}
                          name="Low Stock"
                          fill="#f59e0b"
                        />
                        <ChartBar
                          data={[
                            { x: "Electronics", y: 5 },
                            { x: "Clothing", y: 10 },
                            { x: "Home", y: 5 },
                            { x: "Beauty", y: 2 },
                            { x: "Sports", y: 20 },
                          ]}
                          name="Out of Stock"
                          fill="#ef4444"
                        />
                      </ChartContainer>
                    </Chart>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
