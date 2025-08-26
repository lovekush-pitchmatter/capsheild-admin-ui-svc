const data = [
  {
    label: "Dashboard",
    icon: "MdDashboard",
    path: "/dashboard",
  },
  {
    label: "Users",
    icon: "MdPeople",
    path: "/users",
    children: [
      {
        label: "All Users",
        path: "/all-users",
      },
      {
        label: "KYC Verification",
        path: "/kyc-verification",
      },
      {
        label: "Referrals & Uplines",
        path: "/referrals-uplines",
      },
      {
        label: "Commission Status",
        path: "/commission-status",
      },
      {
        label: "User Actions Log",
        path: "/user-actions-log",
      },
      {
        label: "Add Fund",
        path: "/add-fund",
      },
      {
        label: "Deduct Fund",
        path: "/deduct-fund",
      },
      {
        label: "Blocked Users",
        path: "/blocked-users",
      }
    ],
  },
  {
    label: "KYC",
    icon: "MdVerifiedUser",
    path: "/kyc",
  },
  {
    label: "Referrals",
    icon: "MdShare",
    path: "/referrals",
  },
  {
    label: "Presale",
    icon: "MdAttachMoney",
    path: "/presale",
  },
  {
    label: "Widgets",
    icon: "MdWidgets",
    path: "/widgets",
  },
  {
    label: "Staking",
    icon: "MdStairs",
    path: "/staking",
  },
  {
    label: "CAPX Token",
    icon: "MdToken",
    path: "/capx-token",
  },
  {
    label: "Wallets",
    icon: "MdAccountBalanceWallet",
    path: "/wallets",
    children: [
      {
        label: "Wallet Overview",
        icon: "MdHistory",
        path: "/wallet-overview",
      },
      {
        label: "User Wallet Balances",
        icon: "MdHistory",
        path: "/user-wallet-balances",
      },
      {
        label: "Manual Wallet Update",
        icon: "MdHistory",
        path: "/manual-wallet-update",
      },
      {
        label: "Deposit History",
        icon: "MdHistory",
        path: "/deposit-history",
      },
      {
        label: "Withdrawal History",
        icon: "MdHistory",
        path: "/withdrawal-history",
      },
      {
        label: "Wallet Transfer Logs",
        icon: "MdHistory",
        path: "/wallet-transfer-logs",
      },
      {
        label: "Suspicious Activity Logs",
        icon: "MdHistory",
        path: "/suspicious-activity-logs",
      },
    ],
  },
  {
    label: "Deposits",
    icon: "MdArrowDownward",
    path: "/deposits",
    children: [
      {
        label: "All Deposits",
        icon: "MdHistory",
        path: "/all-deposits",
      },
      {
        label: "Pending Deposits",
        icon: "MdHistory",
        path: "/pending-deposits",
      },
      {
        label: "Approved Deposits",
        icon: "MdHistory",
        path: "/approved-deposits",
      },
      {
        label: "Rejected Deposits",
        icon: "MdHistory",
        path: "/rejected-deposits",
      },
      {
        label: "Manual Deposit Entry",
        icon: "MdHistory",
        path: "/manual-deposit-entry",
      },
      {
        label: "Deposit Logs",
        icon: "MdHistory",
        path: "/deposit-logs",
      },
    ],
  },
  {
    label: "Withdrawals",
    icon: "MdArrowUpward",
    path: "/withdrawals",
    children: [
      {
        label: "All Withdrawals",
        icon: "MdHistory",
        path: "/all-withdrawals",
      },
      {
        label: "Pending Withdrawals",
        icon: "MdHistory",
        path: "/pending-withdrawals",
      },
      {
        label: "Approved Withdrawals",
        icon: "MdHistory",
        path: "/approved-withdrawals",
      },
      {
        label: "Rejected Withdrawals",
        icon: "MdHistory",
        path: "/rejected-withdrawals",
      },
      {
        label: "Manual Withdrawal Entry",
        icon: "MdHistory",
        path: "/manual-withdrawal-entry",
      },
      {
        label: "Withdrawal Logs",
        icon: "MdHistory",
        path: "/withdrawal-logs",
      },
    ],
  },
  {
    label: "Commissions",
    icon: "MdBarChart",
    path: "/commissions",
    children: [
      {
        label: "Commission Overview",
        icon: "MdHistory",
        path: "/commission-overview",
      },
      {
        label: "Pending Commissions",
        icon: "MdHistory",
        path: "/pending-commissions",
      },
      {
        label: "Approved Commissions",
        icon: "MdHistory",
        path: "/approved-commissions",
      },
      {
        label: "Rejected Commissions",
        icon: "MdHistory",
        path: "/rejected-commissions",
      },
      {
        label: "Upline Tracking",
        icon: "MdHistory",
        path: "/upline-tracking",
      },
      {
        label: "Commission Logs",
        icon: "MdHistory",
        path: "/commission-logs",
      },
    ],
  },
  {
    label: "Rewards",
    icon: "MdCardGiftcard",
    path: "/rewards",
    children: [
      {
        label: "Reward Dashboard",
        icon: "MdHistory",
        path: "/reward-dashboard",
      },
      {
        label: "AngelSEED Earnings",
        icon: "MdHistory",
        path: "/angelseed-earnings",
      },
      {
        label: "Engagement Rewards",
        icon: "MdHistory",
        path: "/engagement-rewards",
      },
      {
        label: "Referral Rewards",
        icon: "MdHistory",
        path: "/referral-rewards",
      },
      {
        label: "Airdrop Rewards",
        icon: "MdHistory",
        path: "/airdrop-rewards",
      },
      {
        label: "Reward Logs",
        icon: "MdHistory",
        path: "/reward-logs",
      },
      {
        label: "Manual Reward Entry",
        icon: "MdHistory",
        path: "/manual-reward-entry",
      },
    ],
  },
  {
    label: "AngelSEED",
    icon: "MdWhatshot",
    path: "/angelseed",
    children: [
      {
        label: "AngelSEED Dashboard",
        icon: "MdHistory",
        path: "/angelseed-dashboard",
      },
      {
        label: "Earn History",
        icon: "MdHistory",
        path: "/earn-history",
      },
      {
        label: "Engagement Tracker",
        icon: "MdHistory",
        path: "/engagement-tracker",
      },
      {
        label: "Referral Bonuses",
        icon: "MdHistory",
        path: "/referral-bonuses",
      },
      {
        label: "Spin & Quiz Logs",
        icon: "MdHistory",
        path: "/spin-&-quiz-logs",
      },
      {
        label: "Manual Credit",
        icon: "MdHistory",
        path: "/manual-credit",
      },
      {
        label: "Token Distribution",
        icon: "MdHistory",
        path: "/token-distribution",
      },
    ],
  },
  {
    label: "Games",
    icon: "MdSportsEsports",
    path: "/games",
    children: [
      {
        label: "Game Dashboard",
        icon: "MdHistory",
        path: "/game-dashboard",
      },
      {
        label: "Active Games",
        icon: "MdHistory",
        path: "/active-games",
      },
      {
        label: "Game History",
        icon: "MdHistory",
        path: "/game-history",
      },
      {
        label: "Winners List",
        icon: "MdHistory",
        path: "/winners-list",
      },
      {
        label: "Rewards Issued",
        icon: "MdHistory",
        path: "/rewards-issued",
      },
      {
        label: "Create Game",
        icon: "MdHistory",
        path: "/create-game",
      },
      {
        label: "Game Settings",
        icon: "MdHistory",
        path: "/game-settings",
      },
    ],
  },
  {
    label: "Polls & Quizzes",
    icon: "MdQuiz",
    path: "/polls-quizzes",
    children: [
      {
        label: "Dashboard",
        icon: "MdHistory",
        path: "/dashboard",
      },
      {
        label: "Active Polls",
        icon: "MdHistory",
        path: "/active-polls",
      },
      {
        label: "Active Quizzes",
        icon: "MdHistory",
        path: "/active-quizzes",
      },
      {
        label: "Participation Logs",
        icon: "MdHistory",
        path: "/participation-logs",
      },
      {
        label: "Create Poll",
        icon: "MdHistory",
        path: "/create-poll",
      },
      {
        label: "Create Quiz",
        icon: "MdHistory",
        path: "/create-quiz",
      },
      {
        label: "Results & Insights",
        icon: "MdHistory",
        path: "/results-&-insights",
      },
    ],
  },
  {
    label: "Deals",
    icon: "MdWork",
    path: "/deals",
    children: [
      {
        label: "All Deals",
        icon: "MdHistory",
        path: "/all-deals",
      },
      {
        label: "Add New Deal",
        icon: "MdHistory",
        path: "/add-new-deal",
      },
      {
        label: "Deal Types",
        icon: "MdHistory",
        path: "/deal-types",
      },
      {
        label: "Deal Sources",
        icon: "MdHistory",
        path: "/deal-sources",
      },
      {
        label: "Deal Status",
        icon: "MdHistory",
        path: "/deal-status",
      },
      {
        label: "Success Fee Logs",
        icon: "MdHistory",
        path: "/success-fee-logs",
      },
      {
        label: "Referred Deals",
        icon: "MdHistory",
        path: "/referred-deals",
      },
      {
        label: "Deal Analytics",
        icon: "MdHistory",
        path: "/deal-analytics",
      },
    ],
  },
  {
    label: "Content",
    icon: "MdArticle",
    path: "/content",
    children: [
      {
        label: "Banners",
        icon: "MdHistory",
        path: "/banners",
      },
      {
        label: "Announcements",
        icon: "MdHistory",
        path: "/announcements",
      },
      {
        label: "Notifications",
        icon: "MdHistory",
        path: "/notifications",
      },
      {
        label: "FAQs",
        icon: "MdHistory",
        path: "/faqs",
      },
      {
        label: "Terms & Policies",
        icon: "MdHistory",
        path: "/terms-&-policies",
      },
      {
        label: "Pages",
        icon: "MdHistory",
        path: "/pages",
      },
      {
        label: "Media Library",
        icon: "MdHistory",
        path: "/media-library",
      },
      {
        label: "Email Templates",
        icon: "MdHistory",
        path: "/email-templates",
      },
      {
        label: "Push Messages",
        icon: "MdHistory",
        path: "/push-messages",
      },
    ],
  },
  {
    label: "Reports",
    icon: "MdAssessment",
    path: "/reports",
    children: [
      {
        label: "User Reports",
        icon: "MdHistory",
        path: "/user-reports",
      },
      {
        label: "KYC Reports",
        icon: "MdHistory",
        path: "/kyc-reports",
      },
      {
        label: "Presale Reports",
        icon: "MdHistory",
        path: "/presale-reports",
      },
      {
        label: "Staking Reports",
        icon: "MdHistory",
        path: "/staking-reports",
      },
      {
        label: "Wallet Reports",
        icon: "MdHistory",
        path: "/wallet-reports",
      },
      {
        label: "Commission Reports",
        icon: "MdHistory",
        path: "/commission-reports",
      },
      {
        label: "Referral Reports",
        icon: "MdHistory",
        path: "/referral-reports",
      },
      {
        label: "Transaction Logs",
        icon: "MdHistory",
        path: "/transaction-logs",
      },
      {
        label: "Engagement Reports",
        icon: "MdHistory",
        path: "/engagement-reports",
      },
      {
        label: "Airdrop Reports",
        icon: "MdHistory",
        path: "/airdrop-reports",
      },
      {
        label: "Deal Flow Reports",
        icon: "MdHistory",
        path: "/deal-flow-reports",
      },
      {
        label: "Reward Activity",
        icon: "MdHistory",
        path: "/reward-activity",
      },
      {
        label: "Withdrawal Reports",
        icon: "MdHistory",
        path: "/withdrawal-reports",
      },
      {
        label: "Deposit Reports",
        icon: "MdHistory",
        path: "/deposit-reports",
      },
    ],
  },
  {
    label: "Admins",
    icon: "MdAdminPanelSettings",
    path: "/admins",
    children: [
      {
        label: "All Admins",
        icon: "MdHistory",
        path: "/all-admins",
      },
      {
        label: "Add New Admin",
        icon: "MdHistory",
        path: "/add-new-admin",
      },
      {
        label: "Roles & Permissions",
        icon: "MdHistory",
        path: "/roles-&-permissions",
      },
      {
        label: "Activity Logs",
        icon: "MdHistory",
        path: "/activity-logs",
      },
      {
        label: "Login History",
        icon: "MdHistory",
        path: "/login-history",
      },
      {
        label: "Notifications Settings",
        icon: "MdHistory",
        path: "/notifications-settings",
      },
      {
        label: "Access Control",
        icon: "MdHistory",
        path: "/access-control",
      },
    ],
  },
  {
    label: "Settings",
    icon: "MdSettings",
    path: "/settings",
    children: [
      {
        label: "General Settings",
        icon: "MdHistory",
        path: "/general-settings",
      },
      {
        label: "Payment Gateway",
        icon: "MdHistory",
        path: "/payment-gateway",
      },
      {
        label: "Currency & Country",
        icon: "MdHistory",
        path: "/currency-&-country",
      },
      {
        label: "Commission Settings",
        icon: "MdHistory",
        path: "/commission-settings",
      },
      {
        label: "Token Settings (CAPX & AngelSEED)",
        icon: "MdHistory",
        path: "/token-settings-(capx-&-angelseed)",
      },
      {
        label: "Email & Notifications",
        icon: "MdHistory",
        path: "/email-&-notifications",
      },
      {
        label: "API Integrations",
        icon: "MdHistory",
        path: "/api-integrations",
      },
      {
        label: "Security & Access",
        icon: "MdHistory",
        path: "/security-&-access",
      },
      {
        label: "KYC Provider Settings",
        icon: "MdHistory",
        path: "/kyc-provider-settings",
      },
      {
        label: "UI Customization",
        icon: "MdHistory",
        path: "/ui-customization",
      },
      {
        label: "Terms & Policies",
        icon: "MdHistory",
        path: "/terms-&-policies",
      },
    ],
  },
  {
    label: "Currency & Country",
    icon: "MdPublic",
    path: "/currency-country",
    children: [
      {
        label: "Supported Countries",
        icon: "MdHistory",
        path: "/supported-countries",
      },
      {
        label: "Supported Currencies",
        icon: "MdHistory",
        path: "/supported-currencies",
      },
      {
        label: "Country-wise Currency Settings",
        icon: "MdHistory",
        path: "/country-wise-currency-settings",
      },
      {
        label: "Exchange Rates",
        icon: "MdHistory",
        path: "/exchange-rates",
      },
      {
        label: "Tax & Compliance Rules",
        icon: "MdHistory",
        path: "/tax-&-compliance-rules",
      },
      {
        label: "Country Access Restrictions",
        icon: "MdHistory",
        path: "/country-access-restrictions",
      },
    ],
  },
  {
    label: "Network Settings",
    icon: "MdNetworkCheck",
    path: "/network-settings",
    children: [
      {
        label: "Supported Networks",
        icon: "MdHistory",
        path: "/supported-networks",
      },
      {
        label: "Wallet Prefix & Explorer Links",
        icon: "MdHistory",
        path: "/wallet-prefix-&-explorer-links",
      },
      {
        label: "Token Contract Settings",
        icon: "MdHistory",
        path: "/token-contract-settings",
      },
      {
        label: "Gas Fee Settings",
        icon: "MdHistory",
        path: "/gas-fee-settings",
      },
      {
        label: "RPC & API Integrations",
        icon: "MdHistory",
        path: "/rpc-&-api-integrations",
      },
      {
        label: "Network Access Controls",
        icon: "MdHistory",
        path: "/network-access-controls",
      },
    ],
  },
  {
    label: "Package Plans",
    icon: "MdSubscriptions",
    path: "/package-plans",
    children: [
      {
        label: "All Plans",
        icon: "MdHistory",
        path: "/all-plans",
      },
      {
        label: "Create / Edit Plan",
        icon: "MdHistory",
        path: "/create-/-edit-plan",
      },
      {
        label: "Pricing Tiers",
        icon: "MdHistory",
        path: "/pricing-tiers",
      },
      {
        label: "Subscription Benefits",
        icon: "MdHistory",
        path: "/subscription-benefits",
      },
      {
        label: "Plan Analytics",
        icon: "MdHistory",
        path: "/plan-analytics",
      },
      {
        label: "User Subscriptions",
        icon: "MdHistory",
        path: "/user-subscriptions",
      },
    ],
  },
  {
    label: "Payment Gateways",
    icon: "MdPayment",
    path: "/payment-gateways",
    children: [
      {
        label: "Gateway Settings",
        icon: "MdHistory",
        path: "/gateway-settings",
      },
      {
        label: "Add / Edit Gateway",
        icon: "MdHistory",
        path: "/add-/-edit-gateway",
      },
      {
        label: "Transaction Logs",
        icon: "MdHistory",
        path: "/transaction-logs",
      },
      {
        label: "API Credentials",
        icon: "MdHistory",
        path: "/api-credentials",
      },
      {
        label: "Webhook Status",
        icon: "MdHistory",
        path: "/webhook-status",
      },
      {
        label: "Gateway Status & Limits",
        icon: "MdHistory",
        path: "/gateway-status-&-limits",
      },
    ],
  },
  {
    label: "Integrations",
    icon: "MdIntegrationInstructions",
    path: "/integrations",
    children: [
      {
        label: "Connected Platforms",
        icon: "MdHistory",
        path: "/connected-platforms",
      },
      {
        label: "Add / Edit Integration",
        icon: "MdHistory",
        path: "/add-/-edit-integration",
      },
      {
        label: "API Keys & Secrets",
        icon: "MdHistory",
        path: "/api-keys-&-secrets",
      },
      {
        label: "Webhook Configurations",
        icon: "MdHistory",
        path: "/webhook-configurations",
      },
      {
        label: "Sync Logs",
        icon: "MdHistory",
        path: "/sync-logs",
      },
      {
        label: "Integration Status",
        icon: "MdHistory",
        path: "/integration-status",
      },
    ],
  },
  {
    label: "Logs",
    icon: "MdListAlt",
    path: "/logs",
    children: [
      {
        label: "User Activity Log",
        icon: "MdHistory",
        path: "/user-activity-log",
      },
      {
        label: "Admin Actions Log",
        icon: "MdHistory",
        path: "/admin-actions-log",
      },
      {
        label: "Wallet Transactions Log",
        icon: "MdHistory",
        path: "/wallet-transactions-log",
      },
      {
        label: "KYC Logs",
        icon: "MdHistory",
        path: "/kyc-logs",
      },
      {
        label: "API Call Logs",
        icon: "MdHistory",
        path: "/api-call-logs",
      },
      {
        label: "Login History",
        icon: "MdHistory",
        path: "/login-history",
      },
      {
        label: "System Events Log",
        icon: "MdHistory",
        path: "/system-events-log",
      },
      {
        label: "Error Reports",
        icon: "MdHistory",
        path: "/error-reports",
      },
    ],
  },
  {
    label: "Audit Tools",
    icon: "MdSearch",
    path: "/audit-tools",
    children: [
      {
        label: "Transaction Audit",
        icon: "MdHistory",
        path: "/transaction-audit",
      },
      {
        label: "KYC Audit",
        icon: "MdHistory",
        path: "/kyc-audit",
      },
      {
        label: "Commission Audit",
        icon: "MdHistory",
        path: "/commission-audit",
      },
      {
        label: "Withdrawal Audit",
        icon: "MdHistory",
        path: "/withdrawal-audit",
      },
      {
        label: "Presale Audit",
        icon: "MdHistory",
        path: "/presale-audit",
      },
      {
        label: "Staking Audit",
        icon: "MdHistory",
        path: "/staking-audit",
      },
      {
        label: "Admin Action Audit",
        icon: "MdHistory",
        path: "/admin-action-audit",
      },
      {
        label: "Token Movement Audit",
        icon: "MdHistory",
        path: "/token-movement-audit",
      },
    ],
  },
  {
    label: "Blacklist",
    icon: "MdBlock",
    path: "/blacklist",
    children: [
      {
        label: "Blacklisted Users",
        icon: "MdHistory",
        path: "/blacklisted-users",
      },
      {
        label: "Blacklisted Wallets",
        icon: "MdHistory",
        path: "/blacklisted-wallets",
      },
      {
        label: "IP Address Blacklist",
        icon: "MdHistory",
        path: "/ip-address-blacklist",
      },
      {
        label: "Device Blacklist",
        icon: "MdHistory",
        path: "/device-blacklist",
      },
      {
        label: "Add to Blacklist",
        icon: "MdHistory",
        path: "/add-to-blacklist",
      },
      {
        label: "Blacklist Logs",
        icon: "MdHistory",
        path: "/blacklist-logs",
      },
    ],
  },
];

export default data;