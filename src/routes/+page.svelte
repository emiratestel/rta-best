<script lang="ts">
    import { base } from "$app/paths";
    import Autoplay from "embla-carousel-autoplay";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<div>
    <Carousel.Root
        opts={{
            loop: true,
        }}
        plugins={[
            Autoplay({
                delay: 2000,
            })
        ]}
    >
        <Carousel.Content>
            <Carousel.Item>
                <div class="carousel-slide">
                    <div class="carousel-slide_img" style="background-image: url('{base}/img/carousel/01.jpg');">
                        <div class="carousel-slide_text h-fit max-h-fit">
                            <h1>Meter Scams</h1>
                            <h5>Pay excess amount for invisible parking</h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="carousel-slide">
                    <div class="carousel-slide_img" style="background-image: url('{base}/img/carousel/01.jpg');">
                        <div class="carousel-slide_text">
                            <h1>Meter Scams</h1>
                            <h5>Pay excess amount for invisible parking</h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="carousel-slide">
                    <div class="carousel-slide_img" style="background-image: url('{base}/img/carousel/01.jpg');">
                        <div class="carousel-slide_text">
                            <h1>Meter Scams</h1>
                            <h5>Pay excess amount for invisible parking</h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
    </Carousel.Root>
</div>

<div class="content-grid">
    <div class="content-grid_row">
        <div class="content-grid_img order-2">
            <img src="{base}/img/01.png" alt="">
        </div>
        <div class="content-grid_text order-1">
            <h1>Weird public bus routes</h1>
            <p>Yes Yes, how about 2 hours to go a route that takes 19 miniutes via car? Because fuck you lol</p>
        </div>
    </div>
    <div class="content-grid_row">
        <div class="content-grid_img lg:order-1 order-2">
            <img src="{base}/img/02.jpg" alt="">
        </div>
        <div class="content-grid_text lg:order-2 order-1">
            <h1>Horrible car traffic</h1>
            <p>Wait did I just say car go fast broom vroom? No think again</p>
        </div>
    </div>
    <div class="content-grid_row">
        <div class="content-grid_img order-2">
            <img src="{base}/img/03.png" alt="">
        </div>
        <div class="content-grid_text order-1">
            <h1>It just sucks</h1>
            <p>like did you see how you get an licence mmlol the tests are legit made so you fail and they make no practical sense what so ever like wtf<br /><br />
                Mmmmm yes 10,000AED course so I can learn to drive my 5000 sunny<br /><br />
                Don't forget salary is just 2,500</p>
        </div>
    </div>
</div>