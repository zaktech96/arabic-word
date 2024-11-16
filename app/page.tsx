import { WordGenerator } from "@/components/word-generator";
import { Leaderboard } from "@/components/leaderboard";
import { UserProgress } from "@/components/user-progress";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Arabic Word Learner</h1>
        <p className="text-muted-foreground">
          Learn a new Arabic word daily and compete with friends!
        </p>
      </section>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <WordGenerator />
          <UserProgress />
        </div>
        <Leaderboard />
      </div>
    </div>
  );
}