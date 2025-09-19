import { ReactElement } from 'react';

export interface CampaignCardProps {
    image: string;
    title: string;
    description: string;
    valuation: string;
    target: string;
    investors: number;
    raisedPercentage: string;
    daysLeft: string;
    status?: 'Special' | 'New' | 'Closing soon' | 'Accepting reservations';
  }
  
  export interface FundsRaisedProps {
    activeTimePeriod: string;
    setActiveTimePeriod: (period: string) => void;
  }
  
  export interface SummaryCardProps {
    value: string;
    label: string;
    icon: ReactElement;
    iconBgColor?: string;
  }
  
  export interface SideDivsProps {
    cards: SummaryCardProps[];
  }
  
  export interface FundraisingTypeProps {
    types: { name: string; amount: string; color: string }[];
  }
  
  export interface InvestorSatisfactionProps {
    satisfaction: number; // Percentage (0-100)
  }
  
  export interface TotalFundraisingCampaignsProps {
    campaigns: CampaignCardProps[];
  }
  
  export interface InvestmentBreakdownProps {
    breakdown: { name: string; amount: string; color: string }[];
  }
  
  export interface PortfolioValueProps {
    value: string;
  }
  
  export interface SummaryChartProps {
    activeTimePeriod: string;
    setActiveTimePeriod: (period: string) => void;
    activeSummaryCard: string;
    setActiveSummaryCard: (card: string) => void;
  }
  
  export interface MyWalletProps {}
  
  export interface TopCampaignsProps {
    campaigns: CampaignCardProps[];
  }