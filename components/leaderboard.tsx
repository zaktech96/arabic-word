"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Medal } from "lucide-react";

const MOCK_USERS = [
  { id: 1, name: "Ahmed", score: 25, image: "https://github.com/shadcn.png" },
  { id: 2, name: "Sarah", score: 23, image: "https://github.com/shadcn.png" },
  { id: 3, name: "Mohammed", score: 20, image: "https://github.com/shadcn.png" },
];

export function Leaderboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Medal className="h-5 w-5 text-yellow-500" />
          Weekly Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {MOCK_USERS.map((user, index) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
            >
              <div className="text-xl font-bold w-6">{index + 1}</div>
              <Avatar>
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-sm text-muted-foreground">
                  {user.score} words learned
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}