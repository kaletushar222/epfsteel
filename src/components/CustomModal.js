import { Modal } from 'react-bootstrap'

function CustomModal(props) {
    return (
        <section id="hero" class="d-flex align-items-center">
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.selectedProduct.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img class="card-img-top" src={props.selectedProduct.image} alt="Card image cap" />
                </Modal.Body>
            </Modal>
        </section>
    );
}

export default CustomModal;
