<script>

   import CreditsBox from "../components/CreditsBox.svelte";
  export let data

</script>

<!-- <Content name={name} credits={credits}/> -->

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h2>Hello {data.users.name} 👋</h2>

            <div class="grid">
                <CreditsBox amount={data.users.credits} />
			</div>
          
            <div class="bookings-list">
                <div class="header-list">

                    <h3 class="title">Recent Bookings </h3>
                    <a href="/bookingspast" class="link" >view all (2) </a>
                </div>

				<!-- <BookingList/> -->

                
                        <!-- <BookingListPast rest={{ name: restaurant.name, photo: restaurant.photo, date: restaurant.date }} /> -->
                    
                
            </div>

            <div class="bookings-list">
                <div class="header-list">

                    <h3 class="title">Recent Bookings </h3>
                    <a href="/bookingsup" class="link" >view all (2) </a>
                </div>
                <!-- <BookingList/> -->
            </div>
</section>