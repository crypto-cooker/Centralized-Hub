export  interface RuleItem {
    input: string;
    input_rank: number | null;
  }
  
  export  interface RuleMetricItem {
    input: string;
    input_rank: number | null;
  }
  export  interface RuleValueItem {
    input: string;
    input_rank: number | null;
}
export  interface RuleValueMinItem {
  input: string;
  input_rank: number | null;
}
export  interface RuleValueMaxItem {
  input: string;
  input_rank: number | null;
}
  export  interface RuleTypeItem {
    input: string;
    input_rank: number | null;
  }
  
  export  interface RuleApplyItem {
    input: string;
    input_rank: number | null;
  }
  
  export  interface RewardItem {
    input: string;
    input_rank: number | null;
  }
  
  export  interface RewardTypeItem {
    input: string;
    input_rank: number | null;
  }
  export  interface RewardAmountItem {
    input: string;
    input_rank: number | null;
  }
  export  interface RewardDistributionItem {
    input: string;
    input_rank: number | null;
  }
  export  interface RewardPointsItem {
    input: string;
    input_rank: number | null;
  }
  export  interface RewardAmountItem {
    input: string;
    input_rank: number | null;
  }
  export  interface RewardMintItem {
    input: string;
    input_rank: number | null;
}
export interface RewardCutoffItem {
  input: string;
  input_rank: number | null
}
  
export enum GameType {
  KickFlip = "kickflip",
  Dda = "dda",
  Skatex = "skatex"
}
export enum LandingPagePosition {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom"
}
export enum RewardDistributionType {
  Lottery = "lottery",
  Single = "single"
}
export enum RewardType {
  Nft = "nft",
  Grnd = "grnd",
  Points = "points",
  SFT = "SFT",
  SOL = "Sol"
}
export enum RewardMint {
  Nft = "nft",
  Sft = "sft"
}
export interface RewardAmount {
  input: string;
  input_rank: number;
}
export interface Reward {
  rewardAmount: RewardAmount[];
  rewardType: RewardType;
  rewardDistributionType: RewardDistributionType;
  rewardPointsMax: string;
  rewardMint: RewardMint;
  rewardCutoff: string;
}
export enum RuleAppliesTo {
  Individual = "individual",
  Global = "global"
}
export enum RuleType {
  EndOfEvent = "end-of-event",
  Milestone = "milestone",
  Daily = "daily"
}
export enum RuleMetric {
  PointsTotal = "points-total",
  GrindSpent = "grind-spent",
  DdaWins = "dda-wins",
  BtAccountRegistered = "bt-account-registered",
  LongestWinningStreak = "longest-winning-streak",
  TwitterShare = "twitter-share"
}
export interface RewardRule {
  ruleValue?: string;
  ruleAppliesTo?: RuleAppliesTo;
  ruleType?: RuleType;
  ruleMetric?: RuleMetric;
  rewardsList: Reward[];
}
export interface EventDetail {
  eventName?: string;
  description?: string;
  startsAt?: string;
  endsAt?: string;
  eventAnnouncementImage?: string;
  eventAnnouncementTitle?: string;
  eventAnnouncementDescription?: string;
  bannerImage?: string;
  bannerColor?: string;
  gameType?: GameType;
  shouldHaveLeaderboardPage?: boolean;
  shouldHaveMilestonePage?: boolean;
  landingPagePosition?: LandingPagePosition;
  entryConditionList?: string[];
  rewardRulesList?: RewardRule[];
}
export interface EventType {
  createdAt: string;
  eventId: string;
  userId: string;
  eventDetails?: EventDetail;
}