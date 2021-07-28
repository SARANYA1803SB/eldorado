import {configure,shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import { render } from "@testing-library/react";
import ProductList from '../ProductList';
import {paginate} from "../ProductList";


configure({ adapter: new Adapter() });

  describe("Product List Page", () => {
    let wrapper;
    beforeEach(() => {
        // setup a DOM element as a render target
        wrapper = shallow(<ProductList />);
      });

    it("Test Product Title in Product List", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("Test Product Title in Product List", () => {
        expect(wrapper.find("#title").first().text()).toBe("Name :Minions");
      });
    it("Test Product Title in Product List", () => {
        expect(wrapper.find("#price").first().text()).toBe("Price :1000");
      });
      
    it("Test Product Title in Product List", () => {
        let imageUrl= "https://i.pinimg.com/originals/c7/e6/42/c7e64283cd631ebd281e23fc47d0316e.jpg";
        expect(wrapper.find("Image").first().prop("src")).toEqual(imageUrl);
    });

    it("Test Product Title in Product List", () => {
        let itemsPerPage=9;
         expect(wrapper.find('#item').children()).toHaveLength(itemsPerPage*3);
    });
    //it('Set Page Number', () => {
    //  expect(paginate(1)).toMatchSnapshot();
    //});

    
    
  });