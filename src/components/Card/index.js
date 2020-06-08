import React from "react";

import { connect } from "react-redux";
import { GalleryCard, Button } from "tabler-react";

import { addToDeck } from "../actions/deckActions";


class Card extends React.Component {

    handleClick = (id) => {
        this.props.addToDeck(id);
    }

    render () {
        const item = this.props.card

        return (
            <GalleryCard>
                <GalleryCard.Image
                src={item.image_url}
                alt={`${item.name}`}
                />
                <GalleryCard.Footer>
                    <Button.List>
                        <Button color="dark" icon="copy" right>
                            '{item.inStock}'
                        </Button>
                        <Button color="dark" icon="book-open" right onClick={()=>{this.handleClick(item.id)}}>
                            '{item.inDeck}'
                        </Button>
                    </Button.List>
                </GalleryCard.Footer>
            </GalleryCard>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        addedItems: state.addedItems
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToDeck: (id)=>{dispatch(addToDeck(id))},
        // removeFromDeck: (id) => {dispatch(removeFromDeck(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
