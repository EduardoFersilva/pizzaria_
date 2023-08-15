<template>
    <main>
        <h1>Histórico de pedidos</h1>
        <div class="card">
            <div class="title">
                <h1>#1</h1>
                <p>13/08/23</p>
            </div>
            <div class="content">
                <div>
                    <h2>Status:</h2>
                    <p>Entregue</p>
                </div>
                <p>R$ 75,00</p>
            </div>
        </div>
        <div class="card">
            <div class="title">
                <h1>#2</h1>
                <p>26/07/23</p>
            </div>
            <div class="content">
                <div>
                    <h2>Status:</h2>
                    <p>Entregue</p>
                </div>
                <p>R$ 32,00</p>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'OrderHistory'
}
</script>

<style src="./OrderHistory.scss" lang="scss" scoped />
