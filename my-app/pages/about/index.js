import React from 'react';
import Router from 'next/router';
import MainLayout from '../../components/MainLayout';

const About = () => {
  const onClick = (way) => {
    Router.push(way);
  };

  return (
    <MainLayout title="ABOUT">
      <button onClick={() => onClick('/')}>Go back to home</button>
      <button onClick={() => onClick('/posts')}>Go to posts</button>
      <h1>ABOUT PAGE</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        voluptatum repellat dolores distinctio dolore aliquid, ducimus aut
        molestiae modi esse quidem a, blanditiis, cum autem? Tempora voluptatem
        sapiente nihil nesciunt accusamus similique voluptate! Natus, quae
        similique accusantium adipisci tempore voluptatem molestias corporis
        explicabo officiis impedit odit ducimus sequi ea, nisi quam dolorem
        atque distinctio. Sequi quis beatae vel amet facilis modi odio ea
        aliquid, reiciendis iste suscipit laborum, voluptate, quam id accusamus?
        Iusto placeat tenetur quas sint odit animi vitae fugit suscipit cumque
        explicabo rerum possimus mollitia reiciendis commodi, repellendus
        necessitatibus in error eum. Fugiat ullam odit magni maiores natus!
        Reprehenderit debitis vero id aperiam, inventore quae accusantium ex
        possimus minus non sed temporibus nesciunt ratione, optio quis ullam?
        Vero, nisi molestiae aspernatur unde aliquam nobis debitis eaque earum
        omnis, officiis, repellendus adipisci ullam facilis nesciunt quibusdam
        quod ipsum saepe porro exercitationem odit enim veniam voluptatem in
        quae. Quod molestias dolores eos perspiciatis laudantium aliquid sunt,
        nostrum sit hic rerum consectetur blanditiis alias quis neque odit
        quibusdam debitis ab magnam vero accusamus. Culpa dolorum ratione
        nesciunt, accusamus aspernatur necessitatibus quod amet ducimus! Iste
        fugit alias libero dolores mollitia officiis reiciendis ad, quas
        delectus perferendis, assumenda odio repellendus aperiam maxime amet?
      </p>
    </MainLayout>
  );
};

export default About;
