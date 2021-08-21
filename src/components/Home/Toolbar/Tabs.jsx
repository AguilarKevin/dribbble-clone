import { TabList } from '@chakra-ui/react';
import React from 'react';
import TabItem from './TabItem';

export default function Tabs() {
  return (
    <TabList>
      <TabItem>All</TabItem>
      <TabItem>Animation</TabItem>
      <TabItem>Brading</TabItem>
      <TabItem>Illustration</TabItem>
      <TabItem>Mobile</TabItem>
      <TabItem>Print</TabItem>
      <TabItem>Product Design</TabItem>
      <TabItem>Typography</TabItem>
      <TabItem>Web Design</TabItem>
    </TabList>
  );
}
