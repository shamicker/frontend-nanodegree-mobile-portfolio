# Website Performance Optimization Project

There were 2 parts to the challenge. To optimize PageSpeed Insights score for index.html, and to optimize frames per second (fps) in pizza.html.

## Part 1 - `index.html`

Run [my GitHub Page](https://shamicker.github.io/frontend-nanodegree-mobile-portfolio/) through [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/). The goal was a score of at least 90 for both mobile and desktop.

### Optimize Page Loading

This challenge was to optimize this online portfolio for loading speed. In particular, to optimize the critical rendering path and make this page render as quickly as possible by applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

__Optimizations made__:
* Minified images, HTML, CSS and JavaScript files
* Optimized images
* Compressed all files
* 'Async'ed the non-critical JS scripts
* Inlined the critical CSS components into the HTML
* Added Web Font Loader for asynchronous Google Font loading
* Added media attribute to non-critical CSS link
* Updated Google Analytics code

__Optimizations not made__:
* Keep images locally rather than requesting them



## Part 2 - `views/pizza.html`

On [this page](https://shamicker.github.io/frontend-nanodegree-mobile-portfolio/build/views/pizza.html), you'll find a fairly hideous, fake pizzeria page. 

There were 2 parts to this section:  
__a)__ The hypnotizing background pizzas should move smoothly when you scroll.  
__b)__ In the "Our Pizzas!" section, when the slider moves, the size of the foreground pizzas should change quickly and smoothly.

---

#### 2a) Frame Rate

This challenge was to optimize the scrolling animation until the frames per second rate reached 60 fps or higher, mainly by altering `views/js/main.js`. 

__Optimizations made__:
* Within `updatePositions()`
  * Removed the reading of `items`, its length, and `scrollTop` from the `for` loop
  * Set `style.transform` rather than `style.left`
    * Initiated `style.left` rather than `style.basicLeft` in the setup function
    * Added `will-change: transform;` to CSS class `.mover`
* Added `requestAnimationFrame` rather than simply calling `updatePositions`, as per [this page's suggestion](https://www.html5rocks.com/en/tutorials/speed/animations/)
  * included `onScroll()` and `requestAnimate()`
* Named the anonymous pizza-setup function `setupPizzas()` so I can reuse it
  * Added `getOptimalPizzas()` to minimize pizza leftovers
  * Removed reading of `movingPizzas1` from the `for` loop
* Added page reload on window resize
  * Added a delay to prevent too much lag

__Remaining issues__:
* Not yet at a smooth 60+fps
* Way too many `#document` layers, and I have no idea how or why they're there
* Timeline recording keeps pointing me to the `style.transform=translateX` line, and I have no idea how to improve this
  * Unless a double `for` loop is somehow faster
  * Or a quintuple `if` statement

___

#### 2b) Computational Efficiency

This challenge was to optimize the response time of resizing the pizzas when the slider in "Our Pizzas" section of the page moves. The goal was to resize the pizzas in 5 ms or less.

__Optimizations made__:
* Within `resizePizzas(size)`:
  * Removed `determineDx()`
  * Combined `changeSliderLabel(size)` and `sizeSwitcher(size)`, and removed the function part so that it just runs automatically
  * `changePizzaSizes(size)`
    * Removed the function part so that it runs automatically
    * Removed the reading of `randomPizzaContainer` and its length outside of the `for` loop
* Removed `var pizzasDiv` from the `for` loop
