<script lang="ts">
    import { base } from "$app/paths";
    import Saos from "saos";
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
            delay: 5000,
        })
        ]}
        >
        <Carousel.Content>
            <Carousel.Item>
                <div class="carousel-slide">
                    <div class="carousel-slide_img" style="background-image: url('{base}/img/carousel/01.jpg');">
                        <Saos animation={"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"} once={true}>
                            <div class="carousel-slide_text h-fit max-h-fit">
                                <h1>Meter Scams</h1>
                                <h5>Pay excess amount for invisible parking</h5>
                            </div>
                        </Saos>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="carousel-slide">
                    <div class="carousel-slide_img" style="background-image: url('{base}/img/carousel/02.jpg');">
                        <div class="carousel-slide_text">
                            <h1>Metro</h1>
                            <h5>Get inside the metro, yes it's punchual, except you wait 2 hours extra getting a spot, are you fat? Wait 4, only then you might find room</h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div class="carousel-slide">
                    <div class="carousel-slide_img" style="background-image: url('{base}/img/carousel/03.jpg');">
                        <div class="carousel-slide_text">
                            <h1>RTA HQ</h1>
                            <h5>I heard this office runs 24/7, morning shift, evil businessmen, night shift, demonic businessmen</h5>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
    </Carousel.Root>
</div>

<div class="container">
    <div class="content-grid">
        <div class="content-grid_row">
            <div class="content-grid_img order-2">
                <Saos animation={"fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"} once={true}>
                    <img src="{base}/img/01.png" alt="">
                </Saos>
            </div>        
            <div class="content-grid_text order-1">
                <Saos animation={"fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"} once={true}>
                    <h1>Weird public bus routes</h1>
                    <p>Yes Yes, how about 2 hours to go a route that takes 19 miniutes via car? Because fuck you lol</p>
                </Saos>
            </div>
        </div>
        <div class="content-grid_row">
            <div class="content-grid_img lg:order-1 order-2">
                <Saos animation={"fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"} once={true}>
                    <img src="{base}/img/02.jpg" alt="">
                </Saos>
            </div>
            <div class="content-grid_text lg:order-2 order-1">
                <Saos animation={"fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"} once={true}>
                    <h1>Horrible car traffic</h1>
                    <p>Wait did I just say car go fast broom vroom? No think again</p>
                </Saos>
            </div>
        </div>
        <div class="content-grid_row">
            <div class="content-grid_img order-2">
                <Saos animation={"fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"} once={true}>
                    <img src="{base}/img/03.png" alt="">
                </Saos>
            </div>
            <div class="content-grid_text order-1">
                <Saos animation={"fade-in-right 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both"} once={true}>
                    <h1>It just sucks</h1>
                    <p>
                        like did you see how you get an licence mmlol the tests are legit made so you fail and they make no practical sense what so ever like wtf
                        <br/><br/>
                        Mmmmm yes a 9187.50 AED course so I can learn to drive my Sunny of 5000 dirhams
                        <br/><br/>
                        Don't forget that a <a href="https://www.zu.ac.ae/main/en/research/_publications/_documents/wages%20in%20the%20united%20arab%20emirates.pdf">median salary is just 3,250 AED</a>, less than the cost of any drivers license package!
                    </p>
                </Saos>
            </div>
        </div>
    </div>
</div>