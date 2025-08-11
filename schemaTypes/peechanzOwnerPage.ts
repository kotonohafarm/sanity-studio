import { defineField, defineType } from 'sanity';

export const peechanzOwnerPage = defineType({
  name: 'peechanzOwnerPage',
  title: 'ぴーちゃんズ共同オーナー募集ページ',
  type: 'document',
  fields: [
    // ヒーローセクション
    defineField({
      name: 'heroSection',
      title: 'ヒーローセクション',
      type: 'object',
      fields: [
        defineField({
          name: 'mainTitle',
          title: 'メインタイトル',
          type: 'string',
          description: '例: ぴーちゃんズの家族になる',
        }),
        defineField({
          name: 'subTitle',
          title: 'サブタイトル',
          type: 'string',
          description: '例: ▶︎ ぴーちゃんズ共同オーナーに参加してみたい方へ',
        }),
        defineField({
          name: 'catchphrase',
          title: 'キャッチフレーズ',
          type: 'text',
          description: '例: “たまごが届くだけじゃない。” 命の育ちと暮らしを、毎月あなたへ。',
        }),
        defineField({
          name: 'limitedOfferText',
          title: '限定募集テキスト',
          type: 'text',
          description: '例: ぴーちゃんズの卵は、にわとりたちの“命とリズム”に合わせて届けています。だから、共同オーナーも最大10名限定。“今月の共同オーナー”として2名限定で募集します。',
        }),
        defineField({
          name: 'callToActionText',
          title: 'CTAテキスト',
          type: 'string',
          description: '例: あなたの食卓に、命の物語を。「ぴーちゃんズ共同オーナー」募集中！',
        }),
        defineField({
          name: 'recruitmentPeriod',
          title: '募集期間',
          type: 'string',
          description: '例: 毎月20日～25日の限定募集',
        }),
        defineField({
          name: 'limitedNumber',
          title: '限定人数',
          type: 'string',
          description: '例: 毎月限定2名',
        }),
        defineField({
          name: 'heroImage',
          title: 'ヒーロー画像',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'ヒーローセクションに表示するぴーちゃんズの画像',
        }),
      ],
    }),

    // アバウトセクション
    defineField({
      name: 'aboutSection',
      title: 'アバウトセクション',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'タイトル',
          type: 'string',
          description: '例: ただ卵を届けてるんじゃない。私たちは、命と暮らしている。',
        }),
        defineField({
          name: 'description',
          title: '説明文',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'ことのはファームの紹介と共同オーナーへの想い',
        }),
        defineField({
          name: 'aboutImage',
          title: 'アバウト画像',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'アバウトセクションに表示する画像',
        }),
      ],
    }),

    // 特典セクション
    defineField({
      name: 'benefitsSection',
      title: '特典セクション',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'タイトル',
          type: 'string',
          description: '例: たまごが届くだけじゃない。“いのちとつながる体験”が届きます。',
        }),
        defineField({
          name: 'benefitItems',
          title: '特典項目',
          type: 'array',
          of: [{ type: 'block' }],
          description: '特典の詳細を箇条書きで記述',
        }),
        defineField({
          name: 'benefitImage1',
          title: '特典画像1',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: '特典セクションに表示する画像1',
        }),
        defineField({
          name: 'benefitImage2',
          title: '特典画像2',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: '特典セクションに表示する画像2',
        }),
      ],
    }),

    // 価格セクション
    defineField({
      name: 'pricingSection',
      title: '価格セクション',
      type: 'object',
      fields: [
        defineField({
          name: 'callToAction',
          title: 'CTAテキスト',
          type: 'string',
          description: '例: ぴーちゃんズの物語を、一緒に見守ってくれる方へ。',
        }),
        defineField({
          name: 'trialPriceText',
          title: 'お試し価格テキスト',
          type: 'string',
          description: '例: 《おためし価格》（初月限定）',
        }),
        defineField({
          name: 'trialPrice',
          title: 'お試し価格',
          type: 'string',
          description: '例: 5,000円（税込・送料込み）',
        }),
        defineField({
          name: 'regularPriceText',
          title: '継続プラン価格テキスト',
          type: 'string',
          description: '例: 《継続プラン》（2ヶ月目以降）',
        }),
        defineField({
          name: 'regularPrice',
          title: '継続プラン価格',
          type: 'string',
          description: '例: 9,800円（税込・送料込み）',
        }),
        defineField({
          name: 'limitedOfferNote',
          title: '限定募集注釈',
          type: 'string',
          description: '例: 限定2名さま',
        }),
        defineField({
          name: 'recruitmentText',
          title: '募集テキスト',
          type: 'string',
          description: '例: 募集',
        }),
        defineField({
          name: 'promoCodeText',
          title: 'プロモーションコードテキスト',
          type: 'string',
          description: '例: 初月割り引きプロモーションコード',
        }),
        defineField({
          name: 'productDescription',
          title: '商品概要',
          type: 'string',
          description: '例: ぴーちゃんズの卵（6〜12個/回）＋ 動画配信＆オーナー特典つき',
        }),
        defineField({
          name: 'detailedBenefits',
          title: '詳細特典リスト',
          type: 'array',
          of: [{ type: 'string' }],
          description: '箇条書きの特典リスト',
        }),
        defineField({
          name: 'note',
          title: '注釈',
          type: 'string',
          description: '例: ※ぴーちゃんズ共同オーナーは、最大10名限定です。今月は、2名様を募集しています。',
        }),
      ],
    }),

    // FAQセクション
    defineField({
      name: 'faqSection',
      title: 'よくある質問セクション',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'タイトル',
          type: 'string',
          description: '例: よくある質問',
        }),
        defineField({
          name: 'faqs',
          title: '質問と回答',
          type: 'array',
          of: [
            defineField({
              name: 'faqItem',
              title: '質問項目',
              type: 'object',
              fields: [
                defineField({
                  name: 'question',
                  title: '質問',
                  type: 'string',
                }),
                defineField({
                  name: 'answer',
                  title: '回答',
                  type: 'array',
                  of: [{ type: 'block' }],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // コンタクトセクション
    defineField({
      name: 'contactSection',
      title: 'コンタクトセクション',
      type: 'object',
      fields: [
        defineField({
          name: 'callToAction',
          title: 'CTAテキスト',
          type: 'string',
          description: '例: ぴーちゃんズとのふれあいは、誰にとっても特別な時間',
        }),
        defineField({
          name: 'instruction',
          title: '指示テキスト',
          type: 'string',
          description: '例: ほかにも気になることがあれば、LINEからいつでもご相談くださいね',
        }),
      ],
    }),
  ],
});
