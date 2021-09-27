import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		title: 'My First Book',
		description: 'This is my first book.',
		price: 6,
	},
	{
		id: 'p2',
		title: 'My Second Book',
		description: 'This is my second book.',
		price: 10,
	}
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{
					DUMMY_PRODUCTS.map((product) => (
						<ProductItem
							key={product.id}
							id={product.id}
							title={product.title}
							price={product.price}
							description={product.description}
						/>
					))
				}
			</ul>
		</section>
	);
};

export default Products;
