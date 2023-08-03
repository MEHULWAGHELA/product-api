import React, { Component, Fragment } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'
import axios from 'axios'
class ProductApi extends Component {
    constructor() {
        super()
        this.state = {
            obj: {},
            arr: []
        }
    }
    save = (e) => {
        e.preventDefault()
    }
    componentDidMount() {
        this.getapi()
    }
    getapi = () => {
        axios.get('https://student-api.mycodelibraries.com/api/product/get')
            .then((res) => {
                this.state.arr = res.data.data
                this.setState({ arr: this.state.arr })
            })
            .catch((err) => { })
    }
    postapi = () => {
        axios.post('https://student-api.mycodelibraries.com/api/product/add', this.state.obj)
            .then((res) => { })
            .catch((err) => { })
    }
    updateapi = () => {
        axios.post('https://student-api.mycodelibraries.com/api/product/update', this.state.obj).then((res) => { }).catch((err) => { })
    }
    deleteapi = (id) => {
        axios.delete('https://student-api.mycodelibraries.com/api/product/delete?id=' + id).then((res) => { }).catch((err) => { })
    }
    changeData = (e) => {
        if (e.target.name === 'clothSize') {
            this.state.obj.clothSize = [
                this.state.obj.clothSize ? [...this.state.obj.clothSize] : []
                , e.target.value
            ]
            console.log(this.state.obj.clothSize)
        }
        else {
            this.state.obj[e.target.name] = e.target.value
        }
        this.setState({ obj: { ...this.state.obj } })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} sm={8} md={6} className="offset-sm-3">
                        <Container fluid='sm' className="mt-1 py-1 px-4 border border-1 border-black rounded-2 shadow-lg">
                            <h1 className="text-center py-3">Student Form</h1>
                            <Form onSubmit={this.save}>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="Category" className="fw-600">
                                                Category
                                            </Label>
                                            <select id='Category' className='form-select'
                                                onChange={this.changeData}>
                                                <option value='boys'>Boys</option>
                                                <option value='girls'>Girls</option>
                                                <option value='trans'>Trans</option>
                                            </select>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="productName" className="fw-600">
                                                Product Name
                                            </Label>
                                            <Input
                                                id="productName"
                                                name="productName"
                                                placeholder="Product Name"
                                                type="text"
                                                className="main"
                                                onChange={this.changeData}
                                            />

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="description" className="fw-600 ">
                                                Description
                                            </Label>
                                            <Input
                                                id="description"
                                                name="description"
                                                placeholder="description"
                                                type="text"
                                                className="main"
                                                onChange={this.changeData}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="price" className="fw-600 ">
                                                Price
                                            </Label>
                                            <Input
                                                id="price"
                                                name="price"
                                                placeholder="Price"
                                                type="number"
                                                className="main"
                                                onChange={this.changeData}
                                            />
                                        </FormGroup>
                                    </Col>

                                    <Col md={6}>
                                        <Label for="example" className="fw-600 ">
                                            Stock Status
                                        </Label>
                                        <div className="d-flex">
                                            <div>
                                                <Input
                                                    id="radioone"
                                                    name="inStock"
                                                    type="radio"
                                                    className="gender me-2"
                                                    value='InStock'
                                                    onChange={this.changeData}
                                                />
                                                <Label
                                                    check
                                                    for="radioone"
                                                    className="px-2"
                                                >
                                                    In Stock
                                                </Label>
                                            </div>
                                            <div>
                                                <Input
                                                    id="radiotwo"
                                                    name="inStock"
                                                    type="radio"
                                                    className="gender me-2"
                                                    onChange={this.changeData}
                                                    value='notInStock'
                                                />
                                                <Label
                                                    check
                                                    for="radiotwo"
                                                    className="px-2"
                                                    onChange={this.changeData}
                                                >
                                                    Not in Stock
                                                </Label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={12} className="">
                                        <Label
                                            check
                                            for="example"
                                            className="fw-600 my-2"
                                        >
                                            Cloth Size
                                        </Label>
                                        <Row className="">
                                            <Col xs={6} md={2}>
                                                <Input
                                                    id="XXL"
                                                    name="clothSize"
                                                    type="checkbox"
                                                    className="me-2"
                                                    value='XXl'
                                                    onChange={this.changeData}
                                                />
                                                <Label
                                                    check
                                                    for="XXL"
                                                    className="px-2"
                                                >
                                                    XXL
                                                </Label>
                                            </Col>

                                            <Col xs={6} md={2}>
                                                <Input
                                                    id="XL"
                                                    name="clothSize"
                                                    type="checkbox"
                                                    className="me-2"
                                                    value='XL'
                                                    onChange={this.changeData}
                                                />
                                                <Label
                                                    check
                                                    for="XL"
                                                    className="px-2"
                                                >
                                                    XL
                                                </Label>
                                            </Col>

                                            <Col xs={6} md={2}>
                                                <Input
                                                    id="L"
                                                    name="clothSize"
                                                    type="checkbox"
                                                    className="me-2"
                                                    value='L'
                                                    onChange={this.changeData}
                                                />
                                                <Label
                                                    check
                                                    for="L"
                                                    className="px-2"
                                                >
                                                    L
                                                </Label>
                                            </Col>
                                            <Col xs={6} md={2}>
                                                <Input
                                                    id="M"
                                                    name="clothSize"
                                                    type="checkbox"
                                                    className="me-2"
                                                    value='M'
                                                    onChange={this.changeData}
                                                />
                                                <Label
                                                    check
                                                    for="M"
                                                    className="px-2"
                                                >
                                                    M
                                                </Label>
                                            </Col>

                                            <Col xs={6} md={2}>
                                                <Input
                                                    id="S"
                                                    name="clothSize"
                                                    type="checkbox"
                                                    className="me-2"
                                                    value='S'
                                                    onChange={this.changeData}
                                                />
                                                <Label
                                                    check
                                                    for="S"
                                                    className="px-2"
                                                >
                                                    S
                                                </Label>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <button className="my-2 btn btn-secondary submit fs-4">
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </Container>
                    </Col>
                </Row>
                <div className="container bg-body-secondary mt-3">
                    <h2 className='text-center py-3'>Form</h2>
                    <Row>
                        {this.state.arr.map((x, i) => {
                            return (
                                <Col xs={4} key={i}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {x.category}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6"
                                            >
                                                {x.productName}
                                                {x.price}
                                                {x.clothSize}
                                                {x.inStock}
                                            </CardSubtitle>
                                            <CardText>
                                                Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                            </CardText>
                                            <Button>
                                                Button
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        )
    }
}
export default ProductApi