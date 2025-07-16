import { defineField, defineType } from 'sanity';

export const garlicEggYolkPage = defineType({
  name: 'garlicEggYolkPage',
  title: 'にんにく卵黄ページ',
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
        }),
        defineField({
          name: 'subTitle1',
          title: 'サブタイトル1',
          type: 'string',
        }),
        defineField({
          name: 'subTitle2',
          title: 'サブタイトル2',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: '説明文',
          type: 'text',
        }),
        defineField({
          name: 'giftText',
          title: '贈り物テキスト',
          type: 'string',
        }),
        defineField({
          name: 'mainImage',
          title: 'メイン画像',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),

    // 商品概要と初回限定価格
    defineField({
      name: 'productOverviewSection',
      title: '商品概要と初回限定価格',
      type: 'object',
      fields: [
        defineField({
          name: 'productName',
          title: '商品名',
          type: 'string',
        }),
        defineField({
          name: 'regularPrice',
          title: '通常価格',
          type: 'number',
        }),
        defineField({
          name: 'trialPrice',
          title: '初回限定価格',
          type: 'number',
        }),
        defineField({
          name: 'quantityInfo',
          title: '数量情報',
          type: 'string',
        }),
        defineField({
          name: 'limitedQuantityText',
          title: '数量限定テキスト',
          type: 'string',
        }),
        defineField({
          name: 'limitedQuantityReason',
          title: '数量限定理由',
          type: 'string',
        }),
        defineField({
          name: 'promoCode',
          title: 'プロモーションコード',
          type: 'string',
        }),
      ],
    }),

    // 開発秘話
    defineField({
      name: 'storySection',
      title: '開発秘話',
      type: 'object',
      fields: [
        defineField({
          name: 'storyTitle',
          title: 'タイトル',
          type: 'string',
        }),
        defineField({
          name: 'storyContent',
          title: '内容',
          type: 'array',
          of: [{ type: 'block' }],
        }),
        defineField({
          name: 'storyImage',
          title: '画像',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),

    // 材料へのこだわり
    defineField({
      name: 'ingredientsSection',
      title: '材料へのこだわり',
      type: 'object',
      fields: [
        defineField({
          name: 'ingredientsTitle',
          title: 'タイトル',
          type: 'string',
        }),
        defineField({
          name: 'eggSection',
          title: 'たまご',
          type: 'object',
          fields: [
            defineField({
              name: 'eggDescription',
              title: '説明',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'eggImage',
              title: '画像',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        }),
        defineField({
          name: 'garlicSection',
          title: 'にんにく',
          type: 'object',
          fields: [
            defineField({
              name: 'garlicDescription',
              title: '説明',
              type: 'array',
              of: [{ type: 'block' }],
            }),
            defineField({
              name: 'garlicImage',
              title: '画像',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        }),
        defineField({
          name: 'handmadeText',
          title: '手作りテキスト',
          type: 'text',
        }),
        defineField({
          name: 'handmadeImages',
          title: '手作り画像',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        }),
        defineField({
          name: 'noteText',
          title: '注釈テキスト',
          type: 'string',
        }),
      ],
    }),

    // 体験談
    defineField({
      name: 'testimonialSection',
      title: '体験談',
      type: 'object',
      fields: [
        defineField({
          name: 'testimonialTitle',
          title: 'タイトル',
          type: 'string',
        }),
        defineField({
          name: 'testimonialContent',
          title: '内容',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),

    // 飲み方
    defineField({
      name: 'howToUseSection',
      title: '飲み方',
      type: 'object',
      fields: [
        defineField({
          name: 'howToUseTitle',
          title: 'タイトル',
          type: 'string',
        }),
        defineField({
          name: 'howToUseItems',
          title: '項目',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),

    // よくある質問
    defineField({
      name: 'faqSection',
      title: 'よくある質問',
      type: 'object',
      fields: [
        defineField({
          name: 'faqTitle',
          title: 'タイトル',
          type: 'string',
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

    // コース選択
    defineField({
      name: 'pricingSection',
      title: 'コース選択',
      type: 'object',
      fields: [
        defineField({
          name: 'pricingTitle',
          title: 'タイトル',
          type: 'string',
        }),
        defineField({
          name: 'packImage',
          title: 'パッケージ画像',
          type: 'image',
          options: { hotspot: true },
        }),
        defineField({
          name: 'courses',
          title: 'コース',
          type: 'array',
          of: [
            defineField({
              name: 'course',
              title: 'コース',
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'コース名',
                  type: 'string',
                }),
                defineField({
                  name: 'quantity',
                  title: '数量',
                  type: 'string',
                }),
                defineField({
                  name: 'dailyDose',
                  title: '1日の目安量',
                  type: 'string',
                }),
                defineField({
                  name: 'trialPrice',
                  title: '初回限定価格',
                  type: 'string',
                }),
                defineField({
                  name: 'regularPrice',
                  title: '通常価格',
                  type: 'string',
                }),
                defineField({
                  name: 'benefits',
                  title: 'こんな方に',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // お問い合わせ
    defineField({
      name: 'contactSection',
      title: 'お問い合わせ',
      type: 'object',
      fields: [
        defineField({
          name: 'contactTitle',
          title: 'タイトル',
          type: 'string',
        }),
        defineField({
          name: 'contactDescription',
          title: '説明',
          type: 'text',
        }),
        defineField({
          name: 'contactLinkText',
          title: 'リンクテキスト',
          type: 'string',
        }),
        defineField({
          name: 'contactLinkUrl',
          title: 'リンクURL',
          type: 'url',
        }),
      ],
    }),
  ],
});
