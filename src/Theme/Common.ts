/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
import cardStyles from './components/Card'
import { CommonParams } from './theme'

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    card: cardStyles({Colors, ...args}),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
      line: {
        height: 5,
        width: 60,
        backgroundColor: '#e5e5e5',
        marginVertical: 15,
        alignSelf: 'center',
        borderRadius: 10
      },
      verticleDivider: {
        height: 74,
        width: 1,
        backgroundColor: 'grey',
        opacity: 0.4,
      },
      dash: {
        height: 0.5,
        marginBottom: 18,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderColor: Colors.mono6
      },
      horizontalLined: {
        borderBottomWidth: 1, borderColor: Colors.mono3
      },
      cardShadows: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }
    }),
  }
}
