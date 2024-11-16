"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

export function UserProgress() {
  // This would be fetched from your API
  const progress = {
    weeklyWords: 15,
    weeklyGoal: 20,
    totalWords: 150,
  };

  const progressPercentage = (progress.weeklyWords / progress.weeklyGoal) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Weekly Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-2 text-sm">
            <span>{progress.weeklyWords} words</span>
            <span>{progress.weeklyGoal} goal</span>
          </div>
          <Progress value={progressPercentage} />
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          Total words learned: {progress.totalWords}
        </div>
      </CardContent>
    </Card>
  );
}