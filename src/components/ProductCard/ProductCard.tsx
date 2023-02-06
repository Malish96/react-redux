import React from 'react';
import { Button, Card, Col, Image, Rate, Row } from 'antd';
import './ProductCard.css';
import { ReactComponent as HeartIcon } from '../../assets/heart-svgrepo-com.svg';
import { connect, Dispatch } from 'umi';

interface ProductCardType {
  image: any;
  title: string;
  description: string;
  price: string;
  rate: number;
  rateNum: string;
  dispatch: Dispatch;
  cart?: any;
}

const ProductCard: React.FC<ProductCardType> = (props) => {
  console.log(props.cart);
  return (
    <Card className="card-style">
      <div style={{ float: 'right' }}>
        <Button className="icon-style">
          <HeartIcon />
        </Button>
      </div>
      <Image width={150} height={150} src={props.image} />
      <Row>
        <Col span={21}>{props.title}</Col>
        <Col span={3}>{`$${props.price}`}</Col>
      </Row>
      <Row>
        <Rate disabled defaultValue={props.rate} />
        <p>{props.rateNum}</p>
      </Row>
      <h5>{props.description}</h5>
      <Button
        className="button-style"
        onClick={() => {
          props.dispatch({
            type: 'cart/addItems',
            payload: {
              image: props.image,
              title: props.title,
              description: props.description,
              price: props.price,
            },
          });
        }}
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default connect(({ cart }: any) => ({
  cart,
}))(ProductCard);
