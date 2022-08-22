import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Skeleton from '../../components/Skeleton'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: 'recipe'
  })
  const paths = response.items.map((recipes) => ({
    params: {
      slug: recipes.fields.slug
    }
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const response = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  })

  return {
    props: {
      recipe: response.items
    },
    revalidate: 1
  }
}

export default function RecipeDetails({ recipe }) {
  const { title, cookingTime, featureImage, ingredients, method } = recipe[0].fields

  return recipe.length === 0 ? (
    <>
      <Skeleton />
      <Skeleton />
    </>
  ) : (
    <div>
      <div className='banner'>
        <Image
          width={featureImage.fields.file.details.image.width}
          height={featureImage.fields.file.details.image.height}
          src={`https:${featureImage.fields.file.url}`}
          layout='responsive'
        />
        <h2>{title}</h2>
      </div>
      <div className='info'>
        <p>Take about {cookingTime} mins to cook.</p>
        <h3>Ingredients:</h3>

        {ingredients.map((ingredient) => (
          <span key={ingredient}>{ingredient}</span>
        ))}
      </div>
      <div className='method'>
        <h3>Method:</h3>
        <div>{documentToReactComponents(method)}</div>
      </div>
      <style jsx>{`
        h2,
        h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ', ';
        }
        .info span:last-child::after {
          content: '.';
        }
      `}</style>
    </div>
  )
}
