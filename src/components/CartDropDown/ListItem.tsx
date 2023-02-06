import { Image, List } from 'antd';
import React from 'react';

interface ProductCardType {
  image: any;
  title: string;
  description: string;
  price: string;
}

const ListItem: React.FC<ProductCardType> = (props) => {
  return (
    <div>
      <List>
        <List.Item>
          <Image width={20} height={20} src={props.image} />
          <h4>{props.title}</h4>
          <h5>{props.description}</h5>
        </List.Item>
      </List>
    </div>
  );
};

export default ListItem;
