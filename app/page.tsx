"use client";

import { Button } from "@/components/Button";
import { CardMini, CardMiniProps } from "@/components/CardMini";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";
import { Rating } from "@/components/Rating";
import { Tag } from "@/components/Tag";
import { useState, useRef } from "react";

export default function Home() {
  const cardMiniData: CardMiniProps = {
    title: "Как работать с CSS Grid",
    description: (
      <>
        Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
        сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и
        небольших элементов пользовательского интерфейса.
      </>
    ),
    rubric: "Front-end",
    publicTime: "1 месяц назад",
    readTime: "3 минуты",
    likes: 4,
    url: "https://google.com",
    image: {
      url: "/cardMiniImage.webp",
    },
  };

  const myRef = useRef<HTMLDivElement>(null);
  const [rating, setRating] = useState(3);

  return (
    <>
      <Heading as="h1">Heading 1</Heading>
      <Heading as="h2">Heading 2</Heading>
      <Heading as="h3">Heading 3</Heading>
      <Heading as="h4">Heading 4</Heading>
      <hr />
      <Button variant="primary" arrow="right">
        My button
      </Button>
      <Button variant="secondary" arrow="down">
        My button
      </Button>
      <hr />
      <Paragraph size="small" className="mySmall">
        Some small text
      </Paragraph>
      <Paragraph size="medium" className="myMedium">
        Some medium text
      </Paragraph>
      <Paragraph size="large" className="myLarge">
        Some large text
      </Paragraph>
      <hr />
      <Tag as="a" href="/link" variant="category">
        Ссылка
      </Tag>
      <Tag as="a" href="/link" variant="chip">
        Ссылка
      </Tag>
      <Tag as="a" href="/link" variant="skill">
        Ссылка
      </Tag>
      <Tag as="a" href="/link" variant="sum">
        Ссылка
      </Tag>
      <Tag as="a" href="/link" variant="warn">
        Ссылка
      </Tag>
      <hr />
      <Tag as="button" variant="warn">
        Кнопка
      </Tag>
      <hr />
      <Tag variant="category">Обычный div</Tag>
      <Tag variant="chip">Обычный div</Tag>
      <Tag variant="skill">Обычный div</Tag>
      <Tag variant="sum">Обычный div</Tag>
      <Tag variant="warn">Обычный div</Tag>
      <hr />
      <CardMini {...cardMiniData} />
      <hr />

      <Rating ref={myRef} value={rating} setRating={setRating} />
      {/*<Rating isEditable={true} />*/}
      <hr />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
