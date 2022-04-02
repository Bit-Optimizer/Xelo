import React from 'react';
import { Card, Col, Row, Button, Text } from '@nextui-org/react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

const ProductCard = () => {
  const [liked, setLiked] = React.useState<boolean>(false);
  const change = () => {
    setLiked(!liked);
  };
  return (
    <Card cover css={{ w: '40%', p: 0, cursor: 'pointer' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight='bold' transform='uppercase' color='#9E9E9E'>
            Featured
          </Text>
        </Col>
        <Col>
          <Row justify='flex-end'>
            {liked ? (
              <FaHeart size={25} onClick={change} />
            ) : (
              <FiHeart size={25} onClick={change} />
            )}
          </Row>
        </Col>
      </Card.Header>
      <Card.Body>
        <Card.Image
          src='/pic1.jpg'
          height={400}
          width='100%'
          alt='Relaxing app background'
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: 'absolute',
          bgBlur: '#0f1114',
          borderTop: '$borderWeights$light solid $gray700',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text h4 color='#d1d1d1'>
                  ₹ 1,00,000
                </Text>
                <Text color='#d1d1d1' size={12}>
                  MP Nagar
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify='flex-end'>
              <Button
                flat
                auto
                rounded
                css={{ color: '#94f9f0', bg: '#94f9f026' }}
              >
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                >
                  Buy
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
