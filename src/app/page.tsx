import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-sm p-4">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Merhaba Ertuğrul 👋</h1>
          <Button>ShadCN Butonu</Button>
        </CardContent>
      </Card>
    </main>
  )
}
