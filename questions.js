// questions.js
const allQuestions = [

  // 法令
  {
    category:"法令",
    question:"屋内消火栓設備の放水量は1口あたり毎分何L以上か？",
    choices:["65L","100L","130L","200L"],
    answer:2,
    explanation:"屋内消火栓設備は1口あたり毎分130L以上。"
  },
  {
    category:"法令",
    question:"消火器の設置間隔の基本は？",
    choices:["5mごと","10mごと","15mごと","20mごと"],
    answer:1,
    explanation:"消火器は10mごとに設置することが基本。"
  },
  {
    category:"法令",
    question:"消防設備の点検周期は原則として？",
    choices:["毎日","毎週","毎月","毎年"],
    answer:2,
    explanation:"原則として毎月点検が必要。"
  },

  // 構造
  {
    category:"構造",
    question:"スプリンクラーの一般的作動温度は？",
    choices:["57℃","68℃","79℃","93℃"],
    answer:1,
    explanation:"標準型は68℃。"
  },
  {
    category:"構造",
    question:"消火栓のホース延長距離の標準は？",
    choices:["10m","20m","30m","50m"],
    answer:2,
    explanation:"標準的に30m。"
  },
  {
    category:"構造",
    question:"屋内消火栓の水圧基準は？",
    choices:["0.05MPa以上","0.1MPa以上","0.2MPa以上","0.3MPa以上"],
    answer:2,
    explanation:"0.2MPa以上が基準。"
  },

  // 計算
  {
    category:"計算",
    question:"放水量130L/minを秒に換算すると？",
    choices:["1.3L","2.17L","13L","21.7L"],
    answer:1,
    explanation:"130 ÷ 60 ≈ 2.17L/秒"
  },
  {
    category:"計算",
    question:"消火器の必要本数を求める式として正しいものは？",
    choices:["床面積÷100","床面積÷50","床面積÷200","床面積÷25"],
    answer:0,
    explanation:"一般式は床面積÷100"
  },
  {
    category:"計算",
    question:"消火栓の消火可能時間が2分の場合、必要水量は？（毎分130L）",
    choices:["130L","260L","200L","100L"],
    answer:1,
    explanation:"130×2=260L"
  },

  // サンプル追加（繰り返して増やせる）
  {
    category:"法令",
    question:"防火区画の設置義務は？",
    choices:["全建物","延床面積100㎡以上","延床面積200㎡以上","全階"],
    answer:1,
    explanation:"延床面積100㎡以上の建物に義務。"
  }

  // ここに100問まで追加可能
];
