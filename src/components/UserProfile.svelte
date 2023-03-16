<script>
    export let photo = ''
    export let name= 'Rapha'
    export let email= 'rapha@gmail.com'


</script>

<div class="user-style">
    <img src={photo} alt="" />
    <div class="info">
        <p class="name">{name}</p>
        <p class="email">{email}</p>
    </div>
</div>