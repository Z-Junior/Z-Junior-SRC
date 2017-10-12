<template>
  <div id="app">
    <h1 class="title">Chat</h1>
    <div class="box">

    </div>
  </div>
</template>

<script>
  import raw from 'raw-socket'

  let socket = raw.createSocket({protocol: raw.Protocol.TCP});
</script>
