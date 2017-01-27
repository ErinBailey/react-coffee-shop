/* eslint-env jest, jasmine */

import Header from '../app/components/Header'
import React from 'react'
import { mount } from 'enzyme'

const wrapper = mount(
  <Header />
)

describe('Header', () => {
  it('should render a div with color rgb(144, 12, 63) - #900C3F', () => {
    const divHeader = wrapper.find('#header')
    expect(divHeader.node.style.background).toEqual('rgb(144, 12, 63)')
  })

  it('should render 2 buttons with the same color in the background rgb(144, 12, 63) - #900C3F', () => {
    const homeButton = wrapper.find('#homeButton')
    const menuButton = wrapper.find('#menuButton')
    expect(homeButton.node.style.background).toEqual('rgb(144, 12, 63)')
    expect(menuButton.node.style.background).toEqual('rgb(144, 12, 63)')
  })
})





    // expect(div.containsMatchingElement(
    //   <ul>
    //     <li className="active"><a href="#">Home</a></li>
    //     <li><a href="#">Cart</a></li>
    //   </ul>
    // )).toEqual(true)