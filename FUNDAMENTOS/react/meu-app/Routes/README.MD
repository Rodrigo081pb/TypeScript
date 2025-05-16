# Aprendizado sobre rotas no REACT mais conhecido como: React Router

## Comparado ao Angular

- O angular

tem um arquivo somente para lidar com questões de roteamento
chamado de app.routes.ts

onde fica todo o esquema de path e de componentes de forma mais organizada o react ele trabalha diferente
dentro do arquivo app.tsx a gente criou através de uma instalação de uma biblioteca chamada Browser Routes
ela cuida dessa parte e seu escopo fica mais ou menos assim. 

<BrowserRouter>
    <Routes>
    <Route
        path="/"
        element={<Home/>} // ou qualquer componente JSX
    />
    <Route
        path="/conta"
        element={<Conta/>}
    />
    </Routes>
</BrowserRouter>