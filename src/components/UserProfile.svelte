<script>

    export let photo = ''
    export let name= ''
    export let email= ''


</script>

<div class="user-style">
    <img src={photo} alt="" />
    <div class="info">
        <p class="name">{name}</p>
        <p class="email">{email}</p>
    </div>
</div>