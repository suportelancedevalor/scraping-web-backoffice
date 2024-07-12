<template>
  <div>
    <Navbar />
    <Sidebar />
    <Container col="col-12 col-md-10">
      <Header title="Minha conta">
        <template v-slot:button>
          <router-link
            :to="$paths.passwordUpdate"
            tag="a"
            class="btn btn-outline-primary lift ms-3"
          >
            Alterar senha
          </router-link>
          <button @click="handleDelete" class="btn btn-del lift ms-3">
            <div class="fa-solid fa-times-circle me-1"></div>
            Deletar conta
          </button>
          <button
            @click="isEditing = !isEditing"
            class="btn btn-primary lift ms-3"
          >
            <div class="fa-solid fa-edit me-1"></div>
            {{ isEditing ? "Cancelar" : "Editar conta" }}
          </button>
        </template>
      </Header>

      <div class="card">
        <LoadingContainer v-if="loadingItems" />
        <div class="card-body" v-else>
          <div class="row">
            <div class="col-12">
              <TextInput
                :readOnly="!isEditing"
                label="Nome e sobrenome"
                :model="v$.form.name"
                type="text"
                placeholder="Nome e sobrenome"
                :errorMsg="v$.form.name.required?.$message"
                :value="item?.name"
              />

              <TextInput :readOnly="true" label="Email" :value="item?.email" />

              <div class="text-danger text-center">
                <small>{{ errorMessage }}</small>
              </div>

              <FormButton
                v-if="isEditing"
                label="Concluir"
                :loading="submitting"
                :disabled="v$.$invalid"
                :form="v$.form"
                class="mb-3"
                @onClick="handleEdit"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import MyAccountController from "./MyAccountController";
export default MyAccountController;
</script>
