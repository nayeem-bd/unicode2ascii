function IsBanglaPreKar(CUni) {
  if (CUni == "ি" || CUni == "ৈ" || CUni == "ে") return true;
  return false;
}

function IsBanglaBanjonborno(CUni) {
  if (
    CUni == "ক" ||
    CUni == "খ" ||
    CUni == "গ" ||
    CUni == "ঘ" ||
    CUni == "ঙ" ||
    CUni == "চ" ||
    CUni == "ছ" ||
    CUni == "জ" ||
    CUni == "ঝ" ||
    CUni == "ঞ" ||
    CUni == "ট" ||
    CUni == "ঠ" ||
    CUni == "ড" ||
    CUni == "ঢ" ||
    CUni == "ণ" ||
    CUni == "ত" ||
    CUni == "থ" ||
    CUni == "দ" ||
    CUni == "ধ" ||
    CUni == "ন" ||
    CUni == "প" ||
    CUni == "ফ" ||
    CUni == "ব" ||
    CUni == "ভ" ||
    CUni == "ম" ||
    CUni == "শ" ||
    CUni == "ষ" ||
    CUni == "স" ||
    CUni == "হ" ||
    CUni == "য" ||
    CUni == "র" ||
    CUni == "ল" ||
    CUni == "য়" ||
    CUni == "ং" ||
    CUni == "ঃ" ||
    CUni == "ঁ" ||
    CUni == "ৎ"
  )
    return true;
  return false;
}

function IsBanglaHalant(CUni) {
  if (CUni == "্") return true;
  return false;
}

/////////////////////////////////////// Unicode to Bijoy(ASCII) COnversion ///////////////////////////////////////

var uni2bijoy_string_conversion_map = {
  "।": "|",
  "‘": "Ô",
  "’": "Õ",
  "“": "Ò",
  "”": "Ó",
  "্র্য": "ª¨",
  র‌্য: "i¨",
  ক্ক: "°",
  ক্ট: "±",
  ক্ত: "³",
  ক্ব: "K¡",
  স্ক্র: "¯Œ",
  ক্র: "µ",
  ক্ল: "K¬",
  ক্ষ: "¶",
  ক্স: "·",
  গু: "¸",
  গ্ধ: "»",
  গ্ন: "Mœ",
  গ্ম: "M¥",
  গ্ল: "M­",
  গ্রু: "Mªy",
  ঙ্ক: "¼",
  ঙ্ক্ষ: "•¶",
  ঙ্খ: "•L",
  ঙ্গ: "½",
  ঙ্ঘ: "•N",
  চ্চ: "”P",
  চ্ছ: "”Q",
  চ্ছ্ব: "”Q¡",
  চ্ঞ: "”T",
  জ্জ্ব: "¾¡",
  জ্জ: "¾",
  জ্ঝ: "À",
  জ্ঞ: "Á",
  জ্ব: "R¡",
  ঞ্চ: "Â",
  ঞ্ছ: "Ã",
  ঞ্জ: "Ä",
  ঞ্ঝ: "Å",
  ট্ট: "Æ",
  ট্ব: "U¡",
  ট্ম: "U¥",
  ড্ড: "Ç",
  ণ্ট: "È",
  ণ্ঠ: "É",
  ন্স: "Ý",
  ণ্ড: "Ê",
  ন্তু: "š‘",
  ণ্ব: "Y^",
  ত্ত: "Ë",
  ত্ত্ব: "Ë¡",
  ত্থ: "Ì",
  ত্ন: "Zœ",
  ত্ম: "Z¥",
  ন্ত্ব: "š—¡",
  ত্ব: "Z¡",
  থ্ব: "_¡",
  দ্গ: "˜M",
  দ্ঘ: "˜N",
  দ্দ: "Ï",
  দ্ধ: "×",
  দ্ব: "˜¡",
  দ্ব: "Ø",
  দ্ভ: "™¢",
  দ্ম: "Ù",
  দ্রু: "`ª“",
  ধ্ব: "aŸ",
  ধ্ম: "a¥",
  ন্ট: "›U",
  ন্ঠ: "Ú",
  ন্ড: "Û",
  ন্ত্র: "š¿",
  ন্ত: "š—",
  স্ত্র: "¯¿",
  ত্র: "Î",
  ন্থ: "š’",
  ন্দ: "›`",
  ন্দ্ব: "›Ø",
  ন্ধ: "Ü",
  ন্ন: "bœ",
  ন্ব: "š^",
  ন্ম: "b¥",
  প্ট: "Þ",
  প্ত: "ß",
  প্ন: "cœ",
  প্প: "à",
  প্ল: "c­",
  প্স: "á",
  ফ্ল: "d¬",
  ব্জ: "â",
  ব্দ: "ã",
  ব্ধ: "ä",
  ব্ব: "eŸ",
  ব্ল: "e­",
  ভ্র: "å",
  ম্ন: "gœ",
  ম্প: "¤ú",
  ম্ফ: "ç",
  ম্ব: "¤^",
  ম্ভ: "¤¢",
  ম্ভ্র: "¤£",
  ম্ম: "¤§",
  ম্ল: "¤­",
  রু: "i“",
  রূ: "iƒ",
  ল্ক: "é",
  ল্গ: "ê",
  ল্প: "í",
  ল্ট: "ë",
  ল্ড: "ì",
  ল্ফ: "î",
  ল্ব: "j¦",
  ল্ম: "j¥",
  ল্ল: "jø",
  শু: "ï",
  শ্চ: "ð",
  শ্ন: "kœ",
  শ্ব: "k¦",
  শ্ম: "k¥",
  শ্ল: "kø",
  ষ্ক: "®‹",
  ষ্ক্র: "®Œ",
  ষ্ট: "ó",
  ষ্ঠ: "ô",
  ষ্ণ: "ò",
  ষ্প: "®ú",
  ষ্ফ: "õ",
  ষ্ম: "®§",
  স্ক: "¯‹",
  স্ট: "÷",
  স্খ: "ö",
  স্ত: "¯—",
  স্তু: "¯‘",
  স্থ: "¯’",
  স্ন: "mœ",
  স্প: "¯ú",
  স্ফ: "ù",
  স্ব: "¯^",
  স্ম: "¯§",
  স্ল: "¯­",
  হু: "û",
  হ্ণ: "nè",
  হ্ন: "ý",
  হ্ম: "þ",
  হ্ল: "n¬",
  হৃ: "ü",
  র্: "©",
  "্র": "«",
  "্য": "¨",
  "্": "&",
  আ: "Av",
  অ: "A",
  ই: "B",
  ঈ: "C",
  উ: "D",
  ঊ: "E",
  ঋ: "F",
  এ: "G",
  ঐ: "H",
  ও: "I",
  ঔ: "J",
  ক: "K",
  খ: "L",
  গ: "M",
  ঘ: "N",
  ঙ: "O",
  চ: "P",
  ছ: "Q",
  জ: "R",
  ঝ: "S",
  ঞ: "T",
  ট: "U",
  ঠ: "V",
  ড: "W",
  ঢ: "X",
  ণ: "Y",
  ত: "Z",
  থ: "_",
  দ: "`",
  ধ: "a",
  ন: "b",
  প: "c",
  ফ: "d",
  ব: "e",
  ভ: "f",
  ম: "g",
  য: "h",
  র: "i",
  ল: "j",
  শ: "k",
  ষ: "l",
  স: "m",
  হ: "n",
  ড়: "o",
  ঢ়: "p",
  য়: "q",
  ৎ: "r",
  "০": "0",
  "১": "1",
  "২": "2",
  "৩": "3",
  "৪": "4",
  "৫": "5",
  "৬": "6",
  "৭": "7",
  "৮": "8",
  "৯": "9",
  "া": "v",
  "ি": "w",
  "ী": "x",
  "ু": "y",
  "ূ": "~",
  "ৃ": "…",
  "ে": "‡",
  "ৈ": "‰",
  "ৗ": "Š",
  "ং": "s",
  "ঃ": "t",
  "ঁ": "u",
};

function ReArrangeUnicodeTextB2A(str) {
  var barrier = 0;
  for (var i = 0; i < str.length; i++) {
    if (i < str.length && IsBanglaPreKar(str.charAt(i))) {
      var j = 1;
      while (IsBanglaBanjonborno(str.charAt(i - j))) {
        if (i - j < 0) break;
        if (i - j <= barrier) break;
        if (IsBanglaHalant(str.charAt(i - j - 1))) j += 2;
        else break;
      }
      var temp = str.substring(0, i - j);
      temp += str.charAt(i);
      temp += str.substring(i - j, i);
      temp += str.substring(i + 1, str.length);
      str = temp;
      barrier = i + 1;
      continue;
    }
    if (
      i < str.length - 1 &&
      IsBanglaHalant(str.charAt(i)) &&
      str.charAt(i - 1) == "র" &&
      !IsBanglaHalant(str.charAt(i - 2))
    ) {
      var j = 1;
      var found_pre_kar = 0;
      while (true) {
        if (
          IsBanglaBanjonborno(str.charAt(i + j)) &&
          IsBanglaHalant(str.charAt(i + j + 1))
        )
          j += 2;
        else if (
          IsBanglaBanjonborno(str.charAt(i + j)) &&
          IsBanglaPreKar(str.charAt(i + j + 1))
        ) {
          found_pre_kar = 1;
          break;
        } else break;
      }
      var temp = str.substring(0, i - 1);
      temp += str.substring(i + j + 1, i + j + found_pre_kar + 1);
      temp += str.substring(i + 1, i + j + 1);
      temp += str.charAt(i - 1);
      temp += str.charAt(i);
      temp += str.substring(i + j + found_pre_kar + 1, str.length);
      str = temp;
      i += j + found_pre_kar;
      barrier = i + 1;
      continue;
    }
  }
  return str;
}
export function ConvertToASCII(ConvertTo, line) {
  var conversion_map = uni2bijoy_string_conversion_map;
  if (ConvertTo === "bijoy") conversion_map = uni2bijoy_string_conversion_map;
  var myRegExp;
  myRegExp = new RegExp("ো", "g");
  line = line.replace(myRegExp, "ো");
  myRegExp = new RegExp("ৌ", "g");
  line = line.replace(myRegExp, "ৌ");
  line = ReArrangeUnicodeTextB2A(line);
  for (var unic in conversion_map) {
    myRegExp = new RegExp(unic, "g");
    line = line.replace(myRegExp, conversion_map[unic]);
  }
  return line;
}

