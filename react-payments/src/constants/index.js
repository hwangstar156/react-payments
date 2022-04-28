export const cardInfos = [
  {
    colorType: "poco-color",
    cardType: "포코 카드",
  },
  {
    colorType: "jun-color",
    cardType: "준 카드",
  },
  {
    colorType: "gongwon-color",
    cardType: "공원 카드",
  },
  {
    colorType: "bran-color",
    cardType: "브랜 카드",
  },
  {
    colorType: "roid-color",
    cardType: "로이드 카드",
  },
  {
    colorType: "dobby-color",
    cardType: "도비 카드",
  },
  {
    colorType: "collin-color",
    cardType: "콜린 카드",
  },
  {
    colorType: "sun-color",
    cardType: "썬 카드",
  },
];

export const defaultCardInfo = {
  cardType: "",
  colorType: "empty-color",
};

export const MAX_LENGTH = {
  CARD_NUMBER: 4,
  CARD_PASSWORD: 1,
  EXPIRE_DATE: 2,
  SECURITY_CODE: 3,
  USER_NAME: 30,
};

export const MIDDLE_CARD_NUMBER_LENGTH = 2;

export const MAX_MONTH = 12;

export const HELP_MESSAGE = "카드 뒷면의 3자리 숫자를 입력해주세요.";

export const ERROR_MESSAGE = {
  "card-number": "빈칸없이 입력을 완료해주세요",
  "expire-date": `월은 ${MAX_MONTH}이하로 빈칸없이 입력해주세요`,
  "security-code": `${MAX_LENGTH.SECURITY_CODE}개의 숫자를 입력해주세요`,
  "card-password": `비밀번호 앞 2자리를 입력해주세요`,
};

export const SUCCESS_MESSAGE = "성공적으로 입력됐습니다";
