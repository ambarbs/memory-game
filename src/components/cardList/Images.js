import React from 'react';
import { ImageCardWrapper } from './CardList.Styles';
// tintin
import tintin from '../../images/tintin/tintin.jpg';
import tintin2 from '../../images/tintin/tintin_2.jpg';
import haddock1 from '../../images/tintin/haddock_1.jpg';
import haddock2 from '../../images/tintin/haddock_2.jpg';
import calculus1 from '../../images/tintin/calculus_1.jpg';
import snowy from '../../images/tintin/snowy.png';
import johnson from '../../images/tintin/johnson.png';
import bianca from '../../images/tintin/bianca.jpg';
import jolyon from '../../images/tintin/jolyon.jpg';

// batman
import batman1 from '../../images/batman/batman1.jpg';
import batman2 from '../../images/batman/batman2.jpg';
import bane from '../../images/batman/bane.jpg';
import batwoman from '../../images/batman/batwoman.jpg';
import catwoman from '../../images/batman/catwoman.jpg';
import joker from '../../images/batman/joker.jpg';
import joker2 from '../../images/batman/joker2.jpg';
import penguin from '../../images/batman/penguin.jpg';
import twoface from '../../images/batman/twoface.jpg';

// DC comics
import superman1 from '../../images/dc/superman1.jpeg';
import aquaman from '../../images/dc/aquaman.jpg';
import batman from '../../images/dc/batman.jpeg';
import catwomanDC from '../../images/dc/catwoman.jpg';
import flash from '../../images/dc/flash.jpg';
import flash2 from '../../images/dc/flash2.jpg';
import green2 from '../../images/dc/green2.jpg';
import supergirl from '../../images/dc/supergirl.jpg';
import wonder from '../../images/dc/wonder.jpg';

// Avengers comics
import antMan from '../../images/avengers/antMan.jpg';
import blackPanther from '../../images/avengers/blackPanther.png';
import blackWidow from '../../images/avengers/blackWidow.png';
import captainAmerica from '../../images/avengers/captainAmerica.jpg';
import doctorStrange from '../../images/avengers/doctorStrange.jpg';
import hulk from '../../images/avengers/hulk.png';
import ironman from '../../images/avengers/ironman.jpg';
import spiderman from '../../images/avengers/spiderman.jpg';
import thor from '../../images/avengers/thor.jpg';

export const images = {
  2: [
    tintin,
    tintin2,
    jolyon,
    johnson,
    calculus1,
    haddock1,
    haddock2,
    bianca,
    snowy,
  ].map((image, index) => <ImageCardWrapper key={index} src={image} />),
  0: [
    superman1,
    aquaman,
    batman,
    catwomanDC,
    flash,
    flash2,
    green2,
    supergirl,
    wonder,
  ].map((image, index) => <ImageCardWrapper key={index} src={image} />),
  3: [
    batman1,
    batman2,
    batwoman,
    bane,
    catwoman,
    joker,
    joker2,
    penguin,
    twoface,
  ].map((image, index) => <ImageCardWrapper key={index} src={image} />),
  1: [
    antMan,
    blackPanther,
    blackWidow,
    captainAmerica,
    doctorStrange,
    hulk,
    ironman,
    spiderman,
    thor,
  ].map((image, index) => <ImageCardWrapper key={index} src={image} />),
};
