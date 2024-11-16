"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Sparkles } from "lucide-react";

const ARABIC_WORDS = [
  { arabic: "كتاب", english: "book" },
  { arabic: "قلم", english: "pen" },
  { arabic: "باب", english: "door" },
  { arabic: "نافذة", english: "window" },
  // Add more words as needed
];

export function WordGenerator() {
  const [currentWord, setCurrentWord] = useState(ARABIC_WORDS[0]);
  const [showTranslation, setShowTranslation] = useState(false);
  const { toast } = useToast();

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * ARABIC_WORDS.length);
    setCurrentWord(ARABIC_WORDS[randomIndex]);
    setShowTranslation(false);
  };

  const markAsLearned = async () => {
    try {
      // Here we would make an API call to save the word
      toast({
        title: "Word marked as learned!",
        description: "Keep up the great work!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save word. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Word of the Day
          <Sparkles className="h-5 w-5 text-yellow-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-4xl font-bold mb-4 text-primary">{currentWord.arabic}</p>
          {showTranslation && (
            <p className="text-xl text-muted-foreground">{currentWord.english}</p>
          )}
        </div>
        
        <div className="flex flex-col gap-4">
          <Button
            variant="outline"
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? "Hide" : "Show"} Translation
          </Button>
          
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={generateNewWord}>Next Word</Button>
            <Button variant="secondary" onClick={markAsLearned}>
              Mark as Learned
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}