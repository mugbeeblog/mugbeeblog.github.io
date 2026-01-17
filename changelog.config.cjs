module.exports = {
  disableEmoji: false,
  format: "{type}: {emoji} {subject}",
  list: ["feat", "chore", "refactor", "fix", "style", "docs"],
  questions: ["type", "subject"],
  types: {
    feat: {
      description:
        "新機能の追加、または既存機能の仕様変更（ユーザー視点で挙動が変わる/UI・API・オプションなど）",
      emoji: "🚀",
      value: "feat",
    },
    chore: {
      description:
        "開発・運用を支える作業的変更（成果物の仕様には影響しない / CI・ビルド・依存関係・設定変更など）",
      emoji: "📦",
      value: "chore",
    },
    refactor: {
      description:
        "外部仕様を変えない内部改善（設計・構造・命名・可読性向上など）",
      emoji: "🧩",
      value: "refactor",
    },
    fix: {
      description:
        "既存機能の不具合修正（想定された挙動に戻す変更/バグ・例外・誤動作の修正など）",
      emoji: "🔧",
      value: "fix",
    },
    style: {
      description:
        "UI・見た目の変更（挙動や意味は変わらない/CSS・レイアウト・レスポンシブ対応など）",
      emoji: "🎨",
      value: "style",
    },
    docs: {
      description:
        "ドキュメントや情報の追加・修正（開発者・利用者の理解を助ける/README・コメント・テンプレート・ガイドなど）",
      emoji: "📓",
      value: "docs",
    },
  },
};
