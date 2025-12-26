export const CATEGORIES = [
  "전체",
  "RPG",
  "전략",
  "캐주얼",
  "스포츠",
  "액션"
];

export const GAMES = [
  {
    id: 1,
    title: "세븐나이츠 키우기",
    thumbnail: "https://via.placeholder.com/64/2563EB/FFFFFF?text=SK",
    tags: ["RPG", "방치형"],
    activeCoupons: 5,
    isNew: true,
    isFollowed: false,
    coupons: [
      {
        id: "c1",
        code: "7KIDOL",
        reward: "루비 10,000개",
        isUsed: false,
        status: "active", // active, used, expired
      },
      {
        id: "c2",
        code: "SKNIGHTS",
        reward: "영웅 소환권 100장",
        isUsed: false,
        status: "active",
      },
       {
        id: "c3",
        code: "WELCOME",
        reward: "골드 1억",
        isUsed: true,
        status: "used",
      }
    ]
  },
  {
    id: 2,
    title: "FC 모바일",
    thumbnail: "https://via.placeholder.com/64/22C55E/FFFFFF?text=FC",
    tags: ["스포츠", "축구"],
    activeCoupons: 2,
    isNew: false,
    isFollowed: true,
    coupons: [
      {
        id: "c4",
        code: "GOAL123",
        reward: "선수팩 x10",
        isUsed: false,
        status: "active",
      },
      {
        id: "c5",
        code: "EXPIRED2023",
        reward: "2023 시즌 보상",
        isUsed: false,
        status: "expired",
      }
    ]
  },
  {
    id: 3,
    title: "쿠키런: 킹덤",
    thumbnail: "https://via.placeholder.com/64/EF4444/FFFFFF?text=CK",
    tags: ["RPG", "수집형"],
    activeCoupons: 3,
    isNew: true,
    isFollowed: false,
    coupons: [
      {
        id: "c6",
        code: "COOKIELIVE",
        reward: "크리스탈 3000개",
        isUsed: false,
        status: "active",
      }
    ]
  },
  {
    id: 4,
    title: "버섯커 키우기",
    thumbnail: "https://via.placeholder.com/64/F59E0B/FFFFFF?text=MK",
    tags: ["RPG", "방치형"],
    activeCoupons: 8,
    isNew: false,
    isFollowed: false,
    coupons: []
  },
  {
    id: 5,
    title: "승리의 여신: 니케",
    thumbnail: "https://via.placeholder.com/64/6366F1/FFFFFF?text=NK",
    tags: ["RPG", "슈팅"],
    activeCoupons: 1,
    isNew: false,
    isFollowed: true,
    coupons: []
  }
];
